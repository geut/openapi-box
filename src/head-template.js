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
   * @template {TSchema[]} T
   * @typedef {{
   *  [Kind]: 'UnionOneOf'
   *  static: { [K in keyof T]: Static<T[K]> }[number]
   *  oneOf: T
   * } & TSchema} TUnionOneOf
   */

  /**
   * @template {TSchema[]} T
   * @param {[...T]} oneOf
   * @param {SchemaOptions} [options={}]
   * @returns {TUnionOneOf<T>}
   */
  const UnionOneOf = (oneOf, options = {}) => {
    /**
     * Checks if the value matches exactly one schema in the union.
     *
     * @param {TUnionOneOf<TSchema[]>} schema - The union schema to check against.
     * @param {unknown} value - The value to check.
     * @returns {boolean} True if the value matches exactly one schema, otherwise false.
     */
    function UnionOneOfCheck(schema, value) {
      return (
        1 ===
        schema.oneOf.reduce(
          (acc, schema) => (Value.Check(schema, value) ? acc + 1 : acc),
          0
        )
      )
    }

    if (!TypeRegistry.Has('UnionOneOf'))
      TypeRegistry.Set('UnionOneOf', UnionOneOfCheck)

    return /** @type {TUnionOneOf<typeof oneOf>} */({
      ...options,
      [Kind]: 'UnionOneOf',
      oneOf
    })
  }`
