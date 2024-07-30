export default (cjs = false) => `/* eslint eslint-comments/no-unlimited-disable: off */
  /* eslint-disable */
  // This document was generated automatically by openapi-box

  /**
   * @typedef {import('@sinclair/typebox').TSchema} TSchema
   */

  /**
   * @template {TSchema} T
   * @typedef {import('@sinclair/typebox').Static<T>} Static
   */

  /**
   * @typedef {import('@sinclair/typebox').SchemaOptions} SchemaOptions
   */

  /**
   * @typedef {{
   *  [Path in keyof typeof schema]: {
   *    [Method in keyof typeof schema[Path]]: {
   *      [Prop in keyof typeof schema[Path][Method]]: typeof schema[Path][Method][Prop] extends TSchema ?
   *        Static<typeof schema[Path][Method][Prop]> :
   *        undefined
   *    }
   *  }
   * }} SchemaType
   */

  /**
   * @typedef {{
   *  [ComponentType in keyof typeof _components]: {
   *    [ComponentName in keyof typeof _components[ComponentType]]: typeof _components[ComponentType][ComponentName] extends TSchema ?
   *      Static<typeof _components[ComponentType][ComponentName]> :
   *      undefined
   *  }
   * }} ComponentType
   */

  ${cjs ? "const { Type: T, TypeRegistry, Kind, CloneType } = require('@sinclair/typebox')" : "import { Type as T, TypeRegistry, Kind, CloneType } from '@sinclair/typebox'"}
  ${cjs ? "const { Value } = require('@sinclair/typebox/value')" : "import { Value } from '@sinclair/typebox/value'"}

  /**
   * @typedef {{
   *  [Kind]: 'Binary'
   *  static: string | File | Blob | Uint8Array
   *  anyOf: [{
   *    type: 'object',
   *    additionalProperties: true
   *  }, {
   *    type: 'string',
   *    format: 'binary'
   *  }]
   * } & TSchema} TBinary
   */

  /**
   * @returns {TBinary}
   */
  const Binary = () => {
    /**
     * @param {TBinary} schema
     * @param {unknown} value
     * @returns {boolean}
     */
    function BinaryCheck(schema, value) {
      const type = Object.prototype.toString.call(value)
      return type === '[object Blob]' || type === '[object File]' || type === '[object String]' || type === '[object Uint8Array]'
    }

    if (!TypeRegistry.Has('Binary'))
      TypeRegistry.Set('Binary', BinaryCheck)

    return /** @type {TBinary} */({
      anyOf: [{
        type: 'object',
        additionalProperties: true
      }, {
        type: 'string',
        format: 'binary'
      }],
      [Kind]: 'Binary'
    })
  }`
