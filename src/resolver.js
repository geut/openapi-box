import { fetch } from 'undici'

/**
 * @param {object} headers
 * @param {(err: Error) => any} onError
 */
export default (headers, onError) => ({
  http: {
    read: (file) => {
      const h = new Headers()
      Object.keys(headers).forEach((value, key) => {
        h.set(String(key), value)
      })
      return fetch(file.url, {
        redirect: 'follow',
        headers,
      })
        .catch((err) => {
          onError(new Error(`FetchError: ${err.message}`))
          throw err
        })
        .then((res) => {
          if (res.ok) return res
          const fetchError = new Error(`FetchError: [${res.status}] ${res.statusText}`)
          onError(fetchError)
          throw fetchError
        })
        .then(res => res.arrayBuffer())
        .then(buf => Buffer.from(buf))
    },
  },
})
