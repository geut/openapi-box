const fields = {
  title: true,
  description: true,
  example: true,
  examples: true
}

export function cleanupSchema (val) {
  let k, out, tmp

  if (Array.isArray(val)) {
    out = Array(k = val.length)
    while (k--) out[k] = (tmp = val[k]) && typeof tmp === 'object' ? cleanupSchema(tmp) : tmp
    return out
  }

  if (Object.prototype.toString.call(val) === '[object Object]') {
    out = {} // null

    for (k in val) {
      if (fields[k] && Object.prototype.toString.call(val[k]) === '[object String]') continue

      if (k === '__proto__') {
        Object.defineProperty(out, k, {
          value: cleanupSchema(val[k]),
          configurable: true,
          enumerable: true,
          writable: true
        })
      } else {
        out[k] = (tmp = val[k]) && typeof tmp === 'object' ? cleanupSchema(tmp) : tmp
      }
    }
    return out
  }

  return val
}
