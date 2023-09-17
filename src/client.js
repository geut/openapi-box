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
 * @template T
 * @typedef {{
 *  message: string
 *  stack?: string
 *  errors?: T
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

import './formats.js'
import { Value } from '@sinclair/typebox/value'
import qs from 'fast-querystring'

const defaultQueryParser = (value) => qs.stringify(value)

const getRequestContentType = (body, endpoint) => {
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
      data: await parseContentType(res, endpoint.data, contentType)
    }
  }

  return {
    data: null,
    error: await parseContentType(res, endpoint.error, contentType)
  }
}

const defaultBodyParser = ({ args, contentType }) => {
  if (!args?.body) return
  if (!contentType || !contentType.includes('application/json')) return args.body
  return typeof args.body === 'string' ? args.body : JSON.stringify(args.body)
}

const defaultArgsValidator = async (req) => {
  const { args, endpoint } = req
  if (Value.Check(endpoint.args, args)) return []
  return [...Value.Errors(endpoint.args, args)].map(error => ({
    message: error.message,
    path: error.path,
    value: error.value
  }))
}

/**
 * @template {Schema} S
 * @template {typeof globalThis.fetch} F
 * @param {{
 *  schema: S
 *  baseUrl: string
 *  fetch?: F
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
    queryParser = defaultQueryParser,
    bodyParser = defaultBodyParser,
    argsValidator = defaultArgsValidator,
    preValidation
  } = options

  if (!schema) throw new Error('schema is required')
  if (!baseUrl) throw new Error('baseUrl is required')

  /** @typedef {typeof schema} Schema */
  /** @typedef {typeof fetch} Fetch */

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
   *  Omit<Parameters<Fetch>[1], 'body' | 'method'>} Request
   */

  /**
   * @typedef {Awaited<ReturnType<Fetch>>} FetchResponse
   */

  /**
   * @template {{ data?: any, error?: any }} T
   * @typedef {Pick<T, 'data' | 'error'> & { clientError?: FetchClientErrorType<ValidationErrorType[]>, res?: FetchResponse }} Response
   */

  /**
   * @template {keyof Paths} Path
   * @template {keyof Paths[Path]} Method
   * @template {Pick<Paths[Path][Method], 'data' | 'error'>} SchemaResponse
   * @overload
   * @param {Request<Path, Method>} req
   * @returns {Promise<Response<SchemaResponse>>}
   */

  /**
   * @template {keyof Paths} Path
   * @template {keyof Paths[Path]} Method
   * @template {Pick<Paths[Path][Method], 'data' | 'error'>} SchemaResponse
   * @template {{ data?: any, error?: any }} Result
   * @template {(res: SchemaResponse) => Result} MapResponse
   * @overload
   * @param {Request<Path, Method>} req
   * @param {MapResponse} mapResponse
   * @returns {Promise<Response<Awaited<ReturnType<MapResponse>>>>}
   */
  async function openapiFetch (req, mapResponse) {
    const { path, method, args } = /** @type {{ path: string, method: string, args: Args }} */(req)

    const endpoint = schema[path][method]

    if (!endpoint) {
      return {
        data: null,
        error: null,
        clientError: {
          message: `endpoint not found: ${path} ${method}`
        }
      }
    }

    try {
      const headers = new Headers(req.headers)
      let contentType
      if (headers.has('content-type')) {
        contentType = headers.get('content-type')
      } else {
        contentType = getRequestContentType(req.body, endpoint)
        if (contentType) headers.set('content-type', contentType)
      }

      const reqInfo = {
        path,
        method,
        headers,
        endpoint,
        args,
        contentType
      }

      if (preValidation) await preValidation(reqInfo)

      if (endpoint.args) {
        const errors = await argsValidator(reqInfo)
        if (errors.length > 0) {
          return {
            data: null,
            error: null,
            clientError: {
              message: 'client validation error',
              errors
            }
          }
        }
      }

      if (args?.headers) {
        Object.keys(args.headers).forEach(prop => {
          headers.set(prop, args.headers[prop])
        })
      }

      let urlString = baseUrl + path
      if (args?.params) {
        Object.keys(args.params).forEach(param => {
          urlString = urlString.replace(`{${param}}`, args.params[param])
        })
      }

      const url = new URL(urlString + (args?.query ? `?${queryParser(args.query)}` : ''))

      const res = await fetch(url, {
        headers: reqInfo.headers,
        body: await bodyParser(reqInfo),
        ...req
      })

      let result = /** @type {SchemaResponse} */(await parseResponse(endpoint, res))

      if (mapResponse) {
        result = await mapResponse(result)
      }

      return {
        data: result.data,
        error: result.error,
        res
      }
    } catch (err) {
      return {
        data: null,
        error: null,
        clientError: {
          message: err.message,
          stack: err.stack
        }
      }
    }
  }

  /**
   * @template {keyof Paths} Path
   * @template {keyof Paths[Path]} Method
   * @template {Pick<Paths[Path][Method], 'data' | 'error'>} SchemaResponse
   * @overload
   * @param {{ path: Path, method: Method }} req
   * @returns {Paths[Path][Method]['args'] extends void ?
   *  () => Promise<Response<SchemaResponse>> :
   *  (args: Omit<Request<Path, Method>, 'path' | 'method'>) => Promise<Response<SchemaResponse>>
   * }
   */

  /**
   * @template {keyof Paths} Path
   * @template {keyof Paths[Path]} Method
   * @template {Pick<Paths[Path][Method], 'data' | 'error'>} SchemaResponse
   * @template {{ data?: any, error?: any }} Result
   * @template {(res: SchemaResponse) => Result} MapResponse
   * @overload
   * @param {{ path: Path, method: Method }} req
   * @param {MapResponse} mapResponse
   * @returns {Paths[Path][Method]['args'] extends void ?
   *   () => Promise<Response<Awaited<ReturnType<MapResponse>>>> :
   *   (args: Omit<Request<Path, Method>, 'path' | 'method'>) => Promise<Response<Awaited<ReturnType<MapResponse>>>>
   * }
   */
  function openapiFetchBind (req, mapResponse) {
    return async (opts) => {
      return openapiFetch({
        ...opts,
        path: req.path,
        method: req.method
      }, mapResponse)
    }
  }

  return {
    fetch: openapiFetch,
    bind: openapiFetchBind
  }
}
