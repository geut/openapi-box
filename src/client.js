/** @typedef {import('@sinclair/typebox/value').ValueError} ValueError */

/**
 * @typedef {import('@sinclair/typebox').TSchema} TSchema
 */

/**
 * @template {TSchema} T
 * @typedef {import('@sinclair/typebox').Static<T>} Static
 */

/**
 * @typedef {{
 *  message: string
 *  path: string
 *  value: any
 * }} ValidationErrorType
 */

/**
 * @typedef {{
 *  code: 'ERR_ENDPOINT_NOT_FOUND' | 'ERR_CLIENT_VALIDATION' | 'ERR_FETCH_CLIENT'
 *  message: string
 *  stack?: string
 *  errors?: ValidationErrorType[] | null
 * }} FetchClientErrorType
 */

/**
 * @typedef {{
 *  [path: string]: {
 *    [method: string]: {
 *      args: TSchema
 *      data: TSchema
 *      error: TSchema
 *    }
 *  }
 * }} Schema
 */

/** @typedef {(req: RequestInfo) => Promise<string | null>} FunctionRequestContentType */
/** @typedef {(value: any) => string} FunctionQueryParser */
/** @typedef {(req: RequestInfo) => Promise<BodyInit>} FunctionBodyParser */
/** @typedef {(req: RequestInfo) => Promise<void>} FunctionPreValidation */
/** @typedef {(req: RequestInfo) => Promise<ValidationErrorType[]>} FunctionValidationArgs */

/**
 * @typedef {{
 *  headers: any
 *  params: any
 *  query: any
 *  body: any
 * }} Args
 */

/**
 * @typedef {{
 *  path: string
 *  method: string
 *  headers: Headers
 *  contentType?: string
 *  args?: any
 *  endpoint: {
 *    args: TSchema
 *    data: TSchema
 *    error: TSchema
 *  }
 * }} RequestInfo
 */

import { Value } from '@sinclair/typebox/value'
import qs from 'fast-querystring'

import './formats.js'

const defaultQueryParser = value => qs.stringify(value)

const defaultGetRequestContentType = (body, endpoint) => {
  const contentType = endpoint?.args?.properties?.body?.['x-content-type']
  if (contentType) return contentType
  if (body) {
    const type = Object.prototype.toString.call(body)
    if (type === '[object Object]') return 'application/json'
    if (type === '[object FormData]') return 'multipart/form-data'
  }
  return null
}

const validateStatusCode = (a, b) => {
  if (!a) return false
  if (a === b) return true
  if (a === 'default' && b.startsWith('2')) return true
  if (a.endsWith('x') && a[0] === b[0]) return true
  return false
}

const findResponseContentType = (schema, statusCode) => {
  statusCode = String(statusCode)
  if (schema.anyOf) {
    schema = schema.anyOf.find(s => validateStatusCode(s['x-status-code'], statusCode))
    return schema?.['x-content-type']
  }
  if (validateStatusCode(schema['x-status-code'], statusCode)) {
    return schema?.['x-content-type']
  }
}

const parseContentType = async (res, schema, contentType) => {
  contentType = contentType || findResponseContentType(schema, res.status)
  if (contentType?.includes('application/json')) return res.json()
  return null
}

const parseResponse = async (endpoint, res) => {
  const contentType = res.headers.has('content-type') ? res.headers.get('content-type') : null

  if (res.ok) {
    return {
      data: await parseContentType(res, endpoint.data, contentType),
    }
  }

  return {
    data: null,
    error: await parseContentType(res, endpoint.error, contentType),
  }
}

const defaultBodyParser = ({ args, contentType }) => {
  if (!args?.body) return

  // form
  if (!contentType || contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data')) {
    const form = new FormData()
    Object.keys(args.body).forEach((prop) => {
      const value = args.body[prop]
      const type = Object.prototype.toString.call(value)
      if (type === '[object Uint8Array]') {
        form.append(prop, new Blob([value]))
        return
      }

      if (type === '[object Object]') {
        form.append(prop, JSON.stringify(value))
        return
      }

      // Blob or File or string
      form.append(prop, value)
    })
    return args.body
  }

  // json
  if (contentType.includes('application/json')) {
    return typeof args.body === 'string' ? args.body : JSON.stringify(args.body)
  }

  return args.body
}

const defaultArgsValidator = async (req) => {
  const { args, endpoint } = req
  if (Value.Check(endpoint.args, args)) return []
  return [...Value.Errors(endpoint.args, args)].map(error => ({
    message: error.message,
    path: error.path,
    value: error.value,
  }))
}

/**
 * @template {Schema} S
 * @template {typeof globalThis.fetch} F
 * @param {{
 *  schema: S
 *  baseUrl: string
 *  fetch?: F
 *  getRequestContentType?: FunctionRequestContentType
 *  queryParser?: FunctionQueryParser
 *  bodyParser?: FunctionBodyParser
 *  preValidation?: FunctionPreValidation
 *  argsValidator?: FunctionValidationArgs
 * }} options
 */
export const createClient = (options) => {
  const {
    schema,
    baseUrl,
    fetch = globalThis.fetch,
    getRequestContentType = defaultGetRequestContentType,
    queryParser = defaultQueryParser,
    bodyParser = defaultBodyParser,
    argsValidator = defaultArgsValidator,
    preValidation,
  } = options

  if (!schema) throw new Error('schema is required')
  if (!baseUrl) throw new Error('baseUrl is required')

  /** @typedef {typeof schema} Schema */
  /** @typedef {typeof fetch} Fetch */
  /** @typedef {Omit<Parameters<Fetch>[1], 'body' | 'method'>} FetchInit */

  /**
   * @typedef {{
   *  [Path in keyof Schema]: {
   *    [Method in keyof Schema[Path]]: {
   *      args: Static<Schema[Path][Method]['args']>
   *      data?: Static<Schema[Path][Method]['data']>
   *      error?: Static<Schema[Path][Method]['error']>
   *    }
   *  }
   * }} Paths
   */

  /**
   * @template {keyof Paths} Path
   * @template {keyof Paths[Path]} Method
   * @typedef {{ path: Path, method: Method } &
   *  (Paths[Path][Method]['args'] extends void ? {} : Pick<Paths[Path][Method], 'args'>) &
   *  FetchInit} Request
   */

  /**
   * @typedef {Awaited<ReturnType<Fetch>>} FetchResponse
   */

  /**
   * @template {{ data?: any, error?: any }} T
   * @typedef {Pick<T, 'data' | 'error'> & { clientError?: FetchClientErrorType, res?: FetchResponse }} Response
   */

  /**
   * @template {keyof Paths} Path
   * @template {keyof Paths[Path]} Method
   * @typedef {Pick<Paths[Path][Method], 'data' | 'error'>} SchemaResponse
   */

  /**
   * Function to starts the process of fetching a resource from the network based on the `schema` provided.
   * @template {keyof Paths} Path
   * @template {keyof Paths[Path]} Method
   * @param {Request<Path, Method>} req
   * @returns {Promise<Response<SchemaResponse<Path, Method>>>}
   */
  async function openapiFetch(req) {
    const { path, method, args, ...fetchInit } = /** @type {{ path: string, method: string, args: Args } & FetchInit} */(req)

    const endpoint = schema[path][method]

    if (!endpoint) {
      return {
        data: null,
        error: null,
        clientError: {
          code: 'ERR_ENDPOINT_NOT_FOUND',
          message: `endpoint not found: ${path} ${method}`,
        },
      }
    }

    try {
      const headers = new Headers(fetchInit.headers)
      let contentType
      if (headers.has('content-type')) {
        contentType = headers.get('content-type')
      } else {
        contentType = getRequestContentType(args?.body, endpoint)
        if (contentType) headers.set('content-type', contentType)
      }

      const reqInfo = {
        path,
        method,
        headers,
        endpoint,
        args,
        contentType,
      }

      if (preValidation) await preValidation(reqInfo)

      if (endpoint.args) {
        const errors = await argsValidator(reqInfo)
        if (errors.length > 0) {
          return {
            data: null,
            error: null,
            clientError: {
              code: 'ERR_CLIENT_VALIDATION',
              message: 'client validation error',
              errors,
            },
          }
        }
      }

      if (args?.headers) {
        Object.keys(args.headers).forEach((prop) => {
          headers.set(prop, args.headers[prop])
        })
      }

      let urlString = baseUrl + path
      if (args?.params) {
        Object.keys(args.params).forEach((param) => {
          urlString = urlString.replace(`{${param}}`, args.params[param])
        })
      }

      const url = new URL(urlString + (args?.query ? `?${queryParser(args.query)}` : ''))

      const res = await fetch(url, {
        ...fetchInit,
        method,
        headers: reqInfo.headers,
        body: await bodyParser(reqInfo),
      })

      const result = await parseResponse(endpoint, res)

      return {
        data: result?.data,
        error: result?.error,
        res,
      }
    } catch (err) {
      return {
        data: null,
        error: null,
        clientError: {
          code: 'ERR_FETCH_CLIENT',
          message: err.message,
          stack: err.stack,
        },
      }
    }
  }

  /**
   * Create a fetch endpoint function based on the `schema` provided.
   * @template {keyof Paths} Path
   * @template {keyof Paths[Path]} Method
   * @overload
   * @param {{ path: Path, method: Method } & FetchInit} endpoint
   * @returns {Paths[Path][Method]['args'] extends void ?
   *  (fetchInit?: FetchInit) => Promise<Response<SchemaResponse<Path, Method>>> :
   *  (args: Paths[Path][Method]['args'], fetchInit?: FetchInit) => Promise<Response<SchemaResponse<Path, Method>>>
   * }
   */
  function openapiFetchBind(endpoint) {
    return async (args, fetchInit = {}) => {
      const headers = new Headers()
      const headersA = new Headers(endpoint?.headers)
      const headersB = new Headers(fetchInit?.headers)

      headersA.forEach((value, key) => {
        headers.set(key, value)
      })

      headersB.forEach((value, key) => {
        headers.set(key, value)
      })

      return openapiFetch({
        ...endpoint,
        ...fetchInit,
        // force these properties
        headers,
        path: endpoint.path,
        method: endpoint.method,
        args,
      })
    }
  }

  return {
    fetch: openapiFetch,
    bind: openapiFetchBind,
  }
}
