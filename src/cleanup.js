const validFields = new Set([
  'x-status-code',
  'x-content-type',
  'x-in',
  'type',
  'properties',
  'items',
  'required',
  'pattern',
  'enum',
  'const',
  'minimum',
  'maximum',
  'exclusiveMinimum',
  'exclusiveMaximum',
  'multipleOf',
  'minLength',
  'maxLength',
  'minItems',
  'maxItems',
  'uniqueItems',
  'minProperties',
  'maxProperties',
  'format',
  'additionalProperties',
  'default',
  'allOf',
  'oneOf',
  'anyOf',
  'not',
  'readOnly',
  'writeOnly',
])

const schemaOptions = new Set(['x-status-code', 'x-content-type', 'x-in', 'default', 'readOnly', 'writeOnly'])

export const kRef = Symbol('ref')

export function cleanupSchema(val) {
  const out = {} // null
  let k
  for (k in val) {
    if (validFields.has(k)) {
      out[k] = val[k]
    }
  }
  if (val[kRef]) {
    out[kRef] = val[kRef]
  }
  return out
}

export function extractSchemaOptions(val) {
  const out = {} // null
  let k
  for (k in val) {
    if (schemaOptions.has(k)) {
      out[k] = val[k]
    }
  }
  return out
}
