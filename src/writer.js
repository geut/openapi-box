/** @typedef {import('openapi-types').OpenAPI.Document} Document */

import { createHash } from 'node:crypto'
import SwaggerParser from '@apidevtools/swagger-parser'
import CodeBlockWriter from 'code-block-writer'
import * as prettier from 'prettier'
import safeStringify from '@sindresorhus/safe-stringify'

import resolver from './resolver.js'
import { cleanupSchema } from './cleanup.js'

const scalarTypes = {
  string: 'String',
  number: 'Number',
  boolean: 'Boolean',
  integer: 'Integer',
  null: 'Null'
}

const checksum = str => createHash('md5').update(str).digest('hex')

const createCodeBlockWriter = () => new CodeBlockWriter({
  // optional options
  newLine: '\r\n', // default: "\n"
  indentNumberOfSpaces: 2, // default: 4
  useTabs: false, // default: false
  useSingleQuote: true
})

/**
 *
 * @param {string | URL} path
 * @param {{
 *  cjs?: boolean
 *  headers?: object
 *  removePrefix?: string
 * }} [opts]
 * @returns {Promise<string>}
 */
export const write = async (path, opts = {}) => {
  const { cjs = false, headers = {} } = opts

  let removePrefix
  if (opts.removePrefix) {
    removePrefix = new RegExp(`^${opts.removePrefix}`)
  }

  let fetchError
  const openapi = await SwaggerParser.validate(/** @type {string} */(path), {
    resolve: resolver(headers, (err) => {
      fetchError = err
    })
  }).catch(err => {
    if (fetchError) throw fetchError
    throw err
  })

  const responseSchemas = []
  const requestSchemas = []
  let w = createCodeBlockWriter()

  const cache = new Map()

  w.writeLine(`/* eslint-disable */
  // This document was generated automatically by openapi-box

  /**
   * @typedef {import('@sinclair/typebox').TSchema} TSchema
   */

  /**
   * @template {TSchema} T
   * @typedef {import('@sinclair/typebox').Static<T>} Static
   */

  /**
   * @typedef {{
   *  [Path in keyof schema]: {
   *    [Method in keyof typeof schema[Path]]: {
   *      args: Static<typeof schema[Path][Method]['args']>
   *      data?: Static<typeof schema[Path][Method]['data']>
   *      error?: Static<typeof schema[Path][Method]['error']>
   *    }
   *  }
   * }} Paths
   */

  /**
   * @typedef {{
   *  [ComponentType in keyof _components]: {
   *    [ComponentName in keyof _components[ComponentType]]: Static<_components[ComponentType][ComponentName]>
   *  }
   * }} components
   */

  /** @typedef {Json[]} JsonArray */
  /** @typedef {{ [key: string | number]: Json }} JsonRecord */
  /** @typedef {string} JsonString */
  /** @typedef {number} JsonNumber */
  /** @typedef {boolean} JsonBoolean */
  /** @typedef {null} JsonNull */
  /** @typedef {JsonArray | JsonRecord | JsonString | JsonNumber | JsonBoolean | JsonNull} Json */

  ${cjs ? "const { Type: T } = require('@sinclair/typebox')" : "import { Type as T } from '@sinclair/typebox'"}

  /**
   * @params {object} [options]
   * @returns {ReturnType<typeof T.Unsafe<Json>>}
   */
  const Json = (options) => T.Unsafe(T.Any(options))

  __CACHE__
  `)

  w.blankLineIfLastNot()

  // @ts-ignore
  const { paths, components } = openapi

  if (paths) {
    Object.keys(paths).forEach(pathKey => {
      Object.keys(paths[pathKey]).forEach(method => {
        buildSchema(paths, pathKey, method)
      })
    })

    w.write('const schema = ').inlineBlock(() => {
      Object.keys(paths).forEach(pathKey => {
        const pathStr = removePrefix ? pathKey.replace(removePrefix, '') : pathKey
        w.write(`'${pathStr}': `).inlineBlock(() => {
          Object.keys(paths[pathKey]).forEach(method => {
            w.write(`${method.toUpperCase()}: `).inlineBlock(() => {
              const request = requestSchemas.find(r => r.pathKey === pathKey && r.method === method)
              if (request.args.size > 0) {
                w.write(`args: ${request.isRequired ? '' : 'T.Optional('}T.Object(`).inlineBlock(() => {
                  request.args.forEach((schema, type) => {
                    w.write(`${type}: ${schema},\n`)
                  })
                }).write(`)${request.isRequired ? '' : ')'},\n`)
              } else {
                w.write('args: T.Void(),\n')
              }

              const response = responseSchemas.find(r => r.pathKey === pathKey && r.method === method)
              const success = response.list.filter(l => l.success).map(l => l.text).join(',')
              w.write(`data: ${success},\n`)
              const errors = response.list.filter(l => !l.success).map(l => l.text).join(',')
              w.write(`error: T.Union([${errors}]),\n`)
            }).write(',\n')
          })
        }).write(',\n')
      })
    })
  } else {
    w.write('const schema = {}')
  }

  w.blankLineIfLastNot()

  if (components) {
    w.write('const _components = ').inlineBlock(() => {
      Object.keys(components).forEach(componentType => {
        writeComponents(componentType, components[componentType])
      })
    })
  } else {
    w.write('const _components = {}')
  }

  w.blankLineIfLastNot()

  w.write(cjs ? 'module.exports = { schema, components: _components }' : 'export { schema, _components as components }')

  const text = w.toString()

  const cacheW = createCodeBlockWriter()
  cacheW.write('const cache = {}\n')
  cache.forEach((value, hash) => {
    cacheW.write(`cache['${hash}'] = ${value}\n`)
  })

  return await prettier.format(text.replace('__CACHE__', `${cacheW.toString()}\n`), {
    semi: false,
    singleQuote: true,
    parser: 'typescript',
    trailingComma: 'none'
  })

  function getWriterString (handler) {
    const parentW = w
    w = createCodeBlockWriter()
    handler()
    const str = w.toString()
    w = parentW
    return str
  }

  function writeType (schema, isRequired = false) {
    schema = cleanupSchema(schema)

    if (schema.const) {
      writeLiteral(schema, isRequired)
      return
    }

    if (schema.enum) {
      writeCompound({
        ...schema,
        anyOf: schema.enum
      }, isRequired)
      return
    }

    if (schema.anyOf || schema.allOf) {
      writeCompound(schema, isRequired)
      return
    }

    if (!schema.type) {
      if ('properties' in schema) {
        schema.type = 'object'
      } else {
        w.write('T.Any()')
        return
      }
    }

    if (schema.type === 'object') {
      writeObject(schema, isRequired)
      return
    }

    if (schema.type === 'array') {
      writeArray(schema, isRequired)
      return
    }

    if (schema.type in scalarTypes) {
      writeScalar(schema, isRequired)
    }
  }

  function writeLiteral (schema, isRequired = false) {
    let { const: value, type, ...options } = schema

    value = JSON.stringify(value)

    if (Object.keys(options).length) {
      options = JSON.stringify(options)
    } else {
      options = ''
    }

    w.write(`${isRequired ? '' : 'T.Optional('}T.Literal(${value}${options})${isRequired ? '' : ')'}`)
  }

  function writeCompound (schema, isRequired = false) {
    const { enum: _, type, anyOf, allOf, ...options } = schema

    if (!isRequired) w.write('T.Optional(')

    const compoundType = anyOf ? 'Union' : 'Intersect'
    const list = anyOf || allOf

    w.write(`T.${compoundType}(`)

    const hash = checksum(safeStringify({ list }))

    if (!cache.has(hash)) {
      cache.set(hash, getWriterString(() => {
        w.write('[')
        list.forEach(subSchema => {
          if (typeof subSchema !== 'object') {
            w.write(`T.Literal(${JSON.stringify(subSchema)})`)
          } else {
            if (!('type' in subSchema)) {
              subSchema.type = type
            }
            writeType(subSchema, true)
          }
          w.write(',\n')
        })
        w.write(']')
      }))
    }

    w.write(`cache['${hash}']`)

    if (Object.keys(options).length > 0) {
      w.write(`,${JSON.stringify(options)}`)
    }

    w.write(')')

    if (!isRequired) w.write(')')
  }

  function writeObject (schema, isRequired = false) {
    const { type, properties = {}, required = [], ...options } = schema

    if (!isRequired) w.write('T.Optional(')

    let optionsString
    if (Object.keys(options).length > 0) {
      optionsString = JSON.stringify(options)
    }

    if (Object.keys(properties).length === 0) {
      w.write(`Json(${optionsString || ''})`)
    } else {
      const hash = checksum(safeStringify({ properties, required }))

      w.write('T.Object(')

      if (!cache.has(hash)) {
        cache.set(hash, getWriterString(() => {
          if (Object.keys(properties).length > 0) {
            w.inlineBlock(() => {
              Object.keys(properties).forEach(subSchemaKey => {
                const subSchema = properties[subSchemaKey]
                w.write(`${subSchemaKey}: `)
                writeType(subSchema, required.includes(subSchemaKey))
                w.write(',\n')
              })
            })
          } else {
            w.write('{}')
          }
        }))
      }

      w.write(`cache['${hash}']`)

      if (optionsString) {
        w.write(`,${optionsString}`)
      }

      w.write(')')
    }

    if (!isRequired) w.write(')')
  }

  function writeScalar (schema, isRequired = false) {
    let { type, ...options } = schema

    if (Object.keys(options).length) {
      options = JSON.stringify(options)
    } else {
      options = ''
    }

    w.write(`${isRequired ? '' : 'T.Optional('}T.${scalarTypes[type]}(${options})${isRequired ? '' : ')'}`)
  }

  function writeArray (schema, isRequired = false) {
    const { type, items, ...options } = schema

    if (!isRequired) w.write('T.Optional(')

    const isArray = Array.isArray(items)

    if (!items || (isArray && items.length === 0) || (!isArray && Object.keys(items).length === 0)) {
      w.write('T.Array(')
      w.write('T.Any()')
    } else {
      const hash = checksum(JSON.stringify(items))

      if (isArray) {
        delete options.additionalItems
        delete options.minItems
        delete options.maxItems
        w.write('T.Tuple(')
        cache.set(hash, getWriterString(() => {
          w.write('[')
          items.forEach(subSchema => {
            writeType(subSchema, true)
            w.write(',')
          })
          w.write(']')
        }))
      } else {
        w.write('T.Array(')
        cache.set(hash, getWriterString(() => {
          writeType(items, true)
        }))
      }

      w.write(`cache['${hash}']`)
    }

    if (Object.keys(options).length > 0) {
      w.write(`,${JSON.stringify(options)}`)
    }

    w.write(')')

    if (!isRequired) w.write(')')
  }

  function buildSchema (paths, pathKey, method) {
    const endpoint = paths[pathKey][method]

    const { responses, parameters = [], requestBody } = endpoint

    const request = { pathKey, method, isRequired: false, args: new Map() }

    requestSchemas.push(request)

    request.isRequired = !!(parameters.find(p => p.required) || requestBody?.required)

    const headerParams = parameters.filter(p => p.in === 'header')
    if (headerParams.length > 0) {
      request.args.set('headers', getWriterString(() => {
        writeParameters(headerParams)
      }))
    }

    const pathParams = parameters.filter(p => p.in === 'path')
    if (pathParams.length > 0) {
      request.args.set('params', getWriterString(() => {
        writeParameters(pathParams)
      }))
    }

    const queryParams = parameters.filter(p => p.in === 'query')
    if (queryParams.length > 0) {
      request.args.set('query', getWriterString(() => {
        writeParameters(queryParams)
      }))
    }

    if (requestBody) {
      request.args.set('body', getWriterString(() => writeRequestBody(requestBody)))
    }

    // responses object
    const responseList = []

    if (responses) {
      const responsesWithCode = Object.keys(responses).map(code => ({
        code,
        ...responses[code]
      }))

      const defaultResponse = responsesWithCode.find(res => res.code === 'default') || { code: 'default' }
      const successResponse = responsesWithCode.find(res => `${res.code}`.startsWith('2')) || defaultResponse
      const errorResponses = responsesWithCode.filter(res => !(`${res.code}`.startsWith('2')))

      const pushResponse = (success, response) => {
        responseList.push({
          success,
          text: getWriterString(() => writeResponse(response))
        })
      }

      pushResponse(true, successResponse)
      if (errorResponses.length > 0) {
        errorResponses.forEach(res => pushResponse(false, res))
      } else {
        pushResponse(false, defaultResponse)
      }
    }

    responseSchemas.push({ pathKey, method, list: responseList })
  }

  function writeRequestBody (requestBody) {
    const contentType = 'application/json' in requestBody.content ? 'application/json' : Object.keys(requestBody.content)[0]
    const schema = requestBody.content[contentType].schema
    writeType({
      'x-content-type': contentType,
      ...schema
    }, requestBody.required)
  }
  function writeResponse (response) {
    const obj = {}

    if ('code' in response) {
      obj['x-status-code'] = `${response.code}`.toLowerCase()
    }

    try {
      if (response.content) {
        const content = response.content
        const contentType = 'application/json' in content ? 'application/json' : Object.keys(content)[0]

        return writeType({
          ...obj,
          'x-content-type': contentType,
          ...content[contentType].schema
        }, true)
      }

      if (response.schema) {
        return writeType({
          ...obj,
          ...response.schema
        }, true)
      }

      w.write(`T.Any(${JSON.stringify(obj)})`)
    } catch {
      w.write(`T.Any(${JSON.stringify(obj)})`)
    }
  }

  function writeParameters (parameters) {
    if (parameters.length === 0) return

    const isRequired = parameters.find(p => p.required)

    if (!isRequired) w.write('T.Optional(')

    const hash = checksum(JSON.stringify(parameters))

    w.write('T.Object(')

    if (!cache.has(hash)) {
      cache.set(hash, getWriterString(() => {
        w.inlineBlock(() => {
          parameters.forEach(param => {
            w.write(`'${param.name}': `)
            writeParameter(param)
            w.write(',\n')
          })
        })
      }))
    }

    w.write(`cache['${hash}']`)

    w.write(')')

    if (!isRequired) w.write(')')
  }

  function writeParameter (param) {
    if (!param.schema) {
      param.schema = {
        items: param.items,
        type: param.type
      }
      if (param.format && param.format !== 'string') {
        param.schema.format = param.format
      }
    }

    if (param.in) {
      const inValue = param.in
      delete param.in
      param.schema['x-in'] = inValue
    }

    const hash = checksum(JSON.stringify(param))

    if (!cache.has(hash)) {
      cache.set(hash, getWriterString(() => {
        writeType(param.schema, param.required)
      }))
    }

    w.write(`cache['${hash}']`)
  }

  function writeComponents (componentType, components) {
    switch (componentType) {
      case 'schemas': {
        writeComponent(componentType, components, c => writeType(c, true))
        break
      }
      case 'parameters': {
        writeComponent(componentType, components, c => writeParameter(c))
        break
      }
      case 'responses': {
        writeComponent(componentType, components, c => writeResponse(c))
        break
      }
      case 'requestBodies': {
        writeComponent(componentType, components, c => {
          c.required = true
          writeRequestBody(c)
        })
        break
      }
      case 'headers' : {
        writeComponent(componentType, components, c => writeParameter(c))
        break
      }
    }
  }

  function writeComponent (componentType, components, cb) {
    const list = Object.keys(components)
    if (list.length === 0) return
    w.write(`'${componentType}': `).inlineBlock(() => {
      list.forEach(name => {
        w.write(`'${name}': `)
        cb(components[name])
        w.write(',\n')
      })
    }).write(',\n')
  }
}
