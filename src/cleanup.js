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
])

export function cleanupSchema(val) {
  const out = {} // null
  let k
  for (k in val) {
    if (validFields.has(k)) {
      out[k] = val[k]
    }
  }
  return out
}
