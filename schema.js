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

import { Type as T, TypeRegistry, Kind } from '@sinclair/typebox'
import { Value } from '@sinclair/typebox/value'

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

  return /** @type {TUnionOneOf<typeof oneOf>} */ ({
    ...options,
    [Kind]: 'UnionOneOf',
    oneOf
  })
}

const cache = {}
cache['3388ce813f8cac6b4b9a4250cf426b51'] = [T.Literal('system')]
cache['92698f76445604b7a0396447b24f1d64'] = {
  content: T.String(),
  role: T.Union(cache['3388ce813f8cac6b4b9a4250cf426b51']),
  name: T.Optional(T.String())
}
cache['c42dc14ef7b27cca8ac3b833a00c7de8'] = [T.Literal('text')]
cache['1d65ed0800bcbfa572f19b20e4e05d8c'] = {
  type: T.Union(cache['c42dc14ef7b27cca8ac3b833a00c7de8']),
  text: T.String()
}
cache['e1d87ce7f2ba3e461f4b247c81666007'] = [T.Literal('image_url')]
cache['b6e923bf33eb0750767826c1d9964735'] = [
  T.Literal('auto'),
  T.Literal('low'),
  T.Literal('high')
]
cache['05f745c651342114776178272b5195ec'] = {
  url: T.String({ format: 'uri' }),
  detail: T.Optional(
    T.Union(cache['b6e923bf33eb0750767826c1d9964735'], { default: 'auto' })
  )
}
cache['73e8204042ebb8e1ae7fcd4b97cb0b6a'] = {
  type: T.Union(cache['e1d87ce7f2ba3e461f4b247c81666007']),
  image_url: T.Object(cache['05f745c651342114776178272b5195ec'])
}
cache['617a55cfe087936b04d7ca99d693cc0b'] = [
  T.Object(cache['1d65ed0800bcbfa572f19b20e4e05d8c']),
  T.Object(cache['73e8204042ebb8e1ae7fcd4b97cb0b6a'])
]
cache['52378ac7e31d8328409d329eb06340f3'] = UnionOneOf(
  cache['617a55cfe087936b04d7ca99d693cc0b']
)
cache['6b12c2b23b973dca12c7c5fb854c7d04'] = [
  T.String(),
  T.Array(cache['52378ac7e31d8328409d329eb06340f3'], { minItems: 1 })
]
cache['1079ec62efbb25de8599c427f09bc8c3'] = [T.Literal('user')]
cache['31cb56a0f6c96ff049590c7a7e0e4f93'] = {
  content: UnionOneOf(cache['6b12c2b23b973dca12c7c5fb854c7d04']),
  role: T.Union(cache['1079ec62efbb25de8599c427f09bc8c3']),
  name: T.Optional(T.String())
}
cache['9539c841c419e9057d56191a46591cf8'] = [T.Literal('assistant')]
cache['78a70c640dc014fc048915402571c97d'] = [T.Literal('function')]
cache['05ff07bcc9e465866a065f014be2b0d0'] = {
  name: T.String(),
  arguments: T.String()
}
cache['9856d7691d59a2ed419325465faf362a'] = {
  id: T.String(),
  type: T.Union(cache['78a70c640dc014fc048915402571c97d']),
  function: T.Object(cache['05ff07bcc9e465866a065f014be2b0d0'])
}
cache['0834704c8cede1f92348ff754bdd80f6'] = T.Object(
  cache['9856d7691d59a2ed419325465faf362a']
)
cache['c65e7ad433d29322b42585c7ee972dee'] = {
  arguments: T.String(),
  name: T.String()
}
cache['209b2c57d56a0f28263eb42ae0ee8744'] = {
  content: T.Optional(T.String()),
  role: T.Union(cache['9539c841c419e9057d56191a46591cf8']),
  name: T.Optional(T.String()),
  tool_calls: T.Optional(T.Array(cache['0834704c8cede1f92348ff754bdd80f6'])),
  function_call: T.Optional(T.Object(cache['c65e7ad433d29322b42585c7ee972dee']))
}
cache['a0e04cf91460917013c9c1ec31195e1b'] = [T.Literal('tool')]
cache['5be546f119a7ef874b54d6c255894974'] = {
  role: T.Union(cache['a0e04cf91460917013c9c1ec31195e1b']),
  content: T.String(),
  tool_call_id: T.String()
}
cache['535476e8458c1c85126986c7953ac5ed'] = {
  role: T.Union(cache['78a70c640dc014fc048915402571c97d']),
  content: T.String(),
  name: T.String()
}
cache['ebe89f20ff0e602b7b92dacd97a114cd'] = [
  T.Object(cache['92698f76445604b7a0396447b24f1d64']),
  T.Object(cache['31cb56a0f6c96ff049590c7a7e0e4f93']),
  T.Object(cache['209b2c57d56a0f28263eb42ae0ee8744']),
  T.Object(cache['5be546f119a7ef874b54d6c255894974']),
  T.Object(cache['535476e8458c1c85126986c7953ac5ed'])
]
cache['80a44415499f66d2e4772a7be3d417a1'] = UnionOneOf(
  cache['ebe89f20ff0e602b7b92dacd97a114cd']
)
cache['6afc2f3de56499317e8d80e2cba2c553'] = [
  T.Literal('gpt-4o'),
  T.Literal('gpt-4o-2024-05-13'),
  T.Literal('gpt-4o-mini'),
  T.Literal('gpt-4o-mini-2024-07-18'),
  T.Literal('gpt-4-turbo'),
  T.Literal('gpt-4-turbo-2024-04-09'),
  T.Literal('gpt-4-0125-preview'),
  T.Literal('gpt-4-turbo-preview'),
  T.Literal('gpt-4-1106-preview'),
  T.Literal('gpt-4-vision-preview'),
  T.Literal('gpt-4'),
  T.Literal('gpt-4-0314'),
  T.Literal('gpt-4-0613'),
  T.Literal('gpt-4-32k'),
  T.Literal('gpt-4-32k-0314'),
  T.Literal('gpt-4-32k-0613'),
  T.Literal('gpt-3.5-turbo'),
  T.Literal('gpt-3.5-turbo-16k'),
  T.Literal('gpt-3.5-turbo-0301'),
  T.Literal('gpt-3.5-turbo-0613'),
  T.Literal('gpt-3.5-turbo-1106'),
  T.Literal('gpt-3.5-turbo-0125'),
  T.Literal('gpt-3.5-turbo-16k-0613')
]
cache['583c58b4f91750353b4839ef195a45e7'] = [
  T.String(),
  T.Union(cache['6afc2f3de56499317e8d80e2cba2c553'])
]
cache['8b0e105455b8873220c3f6768304fb8c'] = [
  T.Literal('text'),
  T.Literal('json_object')
]
cache['a78b3d57182ec82d9a9cc20e003f1569'] = {
  type: T.Optional(
    T.Union(cache['8b0e105455b8873220c3f6768304fb8c'], { default: 'text' })
  )
}
cache['e2128d8ebeddc50aaab8b8dc0c18eac2'] = [
  T.Literal('auto'),
  T.Literal('default')
]
cache['2809284b6e54d0d34017715ffe5636bd'] = T.String()
cache['e2dabf6c112e72f5cc25388f08485db6'] = [
  T.String(),
  T.Array(cache['2809284b6e54d0d34017715ffe5636bd'], {
    minItems: 1,
    maxItems: 4
  })
]
cache['35aebd667abc35dedb7a3bb43497761e'] = {
  include_usage: T.Optional(T.Boolean())
}
cache['8a0e72bd020a90249508a3d6f36a7983'] = {
  description: T.Optional(T.String()),
  name: T.String(),
  parameters: T.Optional(
    T.Object(
      {},
      {
        additionalProperties: true
      }
    )
  )
}
cache['a3ce909949dc5ef8380a9acaeba1efc9'] = {
  type: T.Union(cache['78a70c640dc014fc048915402571c97d']),
  function: T.Object(cache['8a0e72bd020a90249508a3d6f36a7983'])
}
cache['69c83e993b83a184c6641fcad3e2fa79'] = T.Object(
  cache['a3ce909949dc5ef8380a9acaeba1efc9']
)
cache['d1784237940345e8f72caffb309dc71f'] = [
  T.Literal('none'),
  T.Literal('auto'),
  T.Literal('required')
]
cache['58244a1afb20970b3d9cbb13f1afbd6e'] = {
  name: T.String()
}
cache['59511b612909655f97ba812e3284d0ab'] = {
  type: T.Union(cache['78a70c640dc014fc048915402571c97d']),
  function: T.Object(cache['58244a1afb20970b3d9cbb13f1afbd6e'])
}
cache['1685fb60796183a10fb0951ebda328f8'] = [
  T.Union(cache['d1784237940345e8f72caffb309dc71f']),
  T.Object(cache['59511b612909655f97ba812e3284d0ab'])
]
cache['3ac88d6b8d6a10864b1d3d17a22b2331'] = [
  T.Literal('none'),
  T.Literal('auto')
]
cache['4f305a600149d8b03d6a2b35313370ba'] = [
  T.Union(cache['3ac88d6b8d6a10864b1d3d17a22b2331']),
  T.Object(cache['58244a1afb20970b3d9cbb13f1afbd6e'])
]
cache['ab96fa8a32fc1d3f3c8ebfa94ced647b'] = T.Object(
  cache['8a0e72bd020a90249508a3d6f36a7983']
)
cache['789d92c12365125b6a639c657ea34917'] = {
  messages: T.Array(cache['80a44415499f66d2e4772a7be3d417a1'], { minItems: 1 }),
  model: T.Union(cache['583c58b4f91750353b4839ef195a45e7']),
  frequency_penalty: T.Optional(
    T.Number({ default: 0, minimum: -2, maximum: 2 })
  ),
  logit_bias: T.Optional(
    T.Object(
      {},
      {
        default: null,
        additionalProperties: T.Integer()
      }
    )
  ),
  logprobs: T.Optional(T.Boolean({ default: false })),
  top_logprobs: T.Optional(T.Integer({ minimum: 0, maximum: 20 })),
  max_tokens: T.Optional(T.Integer()),
  n: T.Optional(T.Integer({ minimum: 1, maximum: 128, default: 1 })),
  presence_penalty: T.Optional(
    T.Number({ default: 0, minimum: -2, maximum: 2 })
  ),
  response_format: T.Optional(
    T.Object(cache['a78b3d57182ec82d9a9cc20e003f1569'])
  ),
  seed: T.Optional(
    T.Integer({ minimum: -9223372036854776000, maximum: 9223372036854776000 })
  ),
  service_tier: T.Optional(
    T.Union(cache['e2128d8ebeddc50aaab8b8dc0c18eac2'], { default: null })
  ),
  stop: T.Optional(
    UnionOneOf(cache['e2dabf6c112e72f5cc25388f08485db6'], { default: null })
  ),
  stream: T.Optional(T.Boolean({ default: false })),
  stream_options: T.Optional(
    T.Object(cache['35aebd667abc35dedb7a3bb43497761e'], {
      default: null
    })
  ),
  temperature: T.Optional(T.Number({ minimum: 0, maximum: 2, default: 1 })),
  top_p: T.Optional(T.Number({ minimum: 0, maximum: 1, default: 1 })),
  tools: T.Optional(T.Array(cache['69c83e993b83a184c6641fcad3e2fa79'])),
  tool_choice: T.Optional(
    UnionOneOf(cache['1685fb60796183a10fb0951ebda328f8'])
  ),
  parallel_tool_calls: T.Optional(T.Boolean({ default: true })),
  user: T.Optional(T.String()),
  function_call: T.Optional(
    UnionOneOf(cache['4f305a600149d8b03d6a2b35313370ba'])
  ),
  functions: T.Optional(
    T.Array(cache['ab96fa8a32fc1d3f3c8ebfa94ced647b'], {
      minItems: 1,
      maxItems: 128
    })
  )
}
cache['80f632106afbb77a2a122509e0f8a574'] = [
  T.Literal('stop'),
  T.Literal('length'),
  T.Literal('tool_calls'),
  T.Literal('content_filter'),
  T.Literal('function_call')
]
cache['899461ac8356aa55071c26ee56ef1c92'] = {
  arguments: T.String(),
  name: T.String()
}
cache['c69b0c46ff5553dbc0c5254e9e735ca5'] = {
  content: T.String(),
  tool_calls: T.Optional(T.Array(cache['0834704c8cede1f92348ff754bdd80f6'])),
  role: T.Union(cache['9539c841c419e9057d56191a46591cf8']),
  function_call: T.Optional(T.Object(cache['899461ac8356aa55071c26ee56ef1c92']))
}
cache['987434f426a7002fc01406e2ac533c03'] = T.Integer()
cache['19d1098a9e291245a8f0e63ced10d0f6'] = {
  token: T.String(),
  logprob: T.Number(),
  bytes: T.Array(cache['987434f426a7002fc01406e2ac533c03'])
}
cache['bb5fdb78b0869fada28b0e4f32b6fd19'] = T.Object(
  cache['19d1098a9e291245a8f0e63ced10d0f6']
)
cache['32aecf538dc34400550f8feaa639c90b'] = {
  token: T.String(),
  logprob: T.Number(),
  bytes: T.Array(cache['987434f426a7002fc01406e2ac533c03']),
  top_logprobs: T.Array(cache['bb5fdb78b0869fada28b0e4f32b6fd19'])
}
cache['0f9a43f024a72d82be5df274008c89b5'] = T.Object(
  cache['32aecf538dc34400550f8feaa639c90b']
)
cache['17d3e5e8d5448d06d73754b3715983b8'] = {
  content: T.Array(cache['0f9a43f024a72d82be5df274008c89b5'])
}
cache['cd04bd14d22539d28b5c8c09faa12996'] = {
  finish_reason: T.Union(cache['80f632106afbb77a2a122509e0f8a574']),
  index: T.Integer(),
  message: T.Object(cache['c69b0c46ff5553dbc0c5254e9e735ca5']),
  logprobs: T.Object(cache['17d3e5e8d5448d06d73754b3715983b8'])
}
cache['d53fb9768e628d20b49a9e7a51b221c2'] = T.Object(
  cache['cd04bd14d22539d28b5c8c09faa12996']
)
cache['197d31a87efdf23d5275a95185387ba2'] = [
  T.Literal('scale'),
  T.Literal('default')
]
cache['6d34b7b60d069faa302d136f5f9af1e5'] = [T.Literal('chat.completion')]
cache['26b974e6ea7bd3e6b1a26b3f0b24db14'] = {
  completion_tokens: T.Integer(),
  prompt_tokens: T.Integer(),
  total_tokens: T.Integer()
}
cache['b4247ecaa0539243e803718b73c0ea20'] = {
  id: T.String(),
  choices: T.Array(cache['d53fb9768e628d20b49a9e7a51b221c2']),
  created: T.Integer(),
  model: T.String(),
  service_tier: T.Optional(T.Union(cache['197d31a87efdf23d5275a95185387ba2'])),
  system_fingerprint: T.Optional(T.String()),
  object: T.Union(cache['6d34b7b60d069faa302d136f5f9af1e5']),
  usage: T.Optional(T.Object(cache['26b974e6ea7bd3e6b1a26b3f0b24db14']))
}
cache['e327ee8056d7b68441b772b9a15a5fde'] = [
  T.Literal('gpt-3.5-turbo-instruct'),
  T.Literal('davinci-002'),
  T.Literal('babbage-002')
]
cache['dd6bc9c8e7384816c01976c2d7fa016f'] = [
  T.String(),
  T.Union(cache['e327ee8056d7b68441b772b9a15a5fde'])
]
cache['edea7dc68468ea6859c0099d16770be3'] = T.String({ default: '' })
cache['592a7dccc6beda71b5e955bce07b7d38'] = T.Array(
  cache['987434f426a7002fc01406e2ac533c03'],
  { minItems: 1 }
)
cache['62c966cc9d1ae4e4c44f9644868f65e2'] = [
  T.String({ default: '' }),
  T.Array(cache['edea7dc68468ea6859c0099d16770be3']),
  T.Array(cache['987434f426a7002fc01406e2ac533c03'], { minItems: 1 }),
  T.Array(cache['592a7dccc6beda71b5e955bce07b7d38'], { minItems: 1 })
]
cache['73dba181a5268f6d291bffbc18ca683e'] = T.String()
cache['a98bff739bcd042047e2e84bff9f2568'] = [
  T.String({ default: '<|endoftext|>' }),
  T.Array(cache['73dba181a5268f6d291bffbc18ca683e'], {
    minItems: 1,
    maxItems: 4
  })
]
cache['ab1eaa61a000e22a30970151a2dbdae3'] = {
  model: T.Union(cache['dd6bc9c8e7384816c01976c2d7fa016f']),
  prompt: UnionOneOf(cache['62c966cc9d1ae4e4c44f9644868f65e2'], {
    default: '<|endoftext|>'
  }),
  best_of: T.Optional(T.Integer({ default: 1, minimum: 0, maximum: 20 })),
  echo: T.Optional(T.Boolean({ default: false })),
  frequency_penalty: T.Optional(
    T.Number({ default: 0, minimum: -2, maximum: 2 })
  ),
  logit_bias: T.Optional(
    T.Object(
      {},
      {
        default: null,
        additionalProperties: T.Integer()
      }
    )
  ),
  logprobs: T.Optional(T.Integer({ minimum: 0, maximum: 5, default: null })),
  max_tokens: T.Optional(T.Integer({ minimum: 0, default: 16 })),
  n: T.Optional(T.Integer({ minimum: 1, maximum: 128, default: 1 })),
  presence_penalty: T.Optional(
    T.Number({ default: 0, minimum: -2, maximum: 2 })
  ),
  seed: T.Optional(
    T.Integer({ minimum: -9223372036854776000, maximum: 9223372036854776000 })
  ),
  stop: T.Optional(
    UnionOneOf(cache['a98bff739bcd042047e2e84bff9f2568'], { default: null })
  ),
  stream: T.Optional(T.Boolean({ default: false })),
  stream_options: T.Optional(
    T.Object(cache['35aebd667abc35dedb7a3bb43497761e'], {
      default: null
    })
  ),
  suffix: T.Optional(T.String({ default: null })),
  temperature: T.Optional(T.Number({ minimum: 0, maximum: 2, default: 1 })),
  top_p: T.Optional(T.Number({ minimum: 0, maximum: 1, default: 1 })),
  user: T.Optional(T.String())
}
cache['55ff9a246f01e0bb7cdf862681370e23'] = [
  T.Literal('stop'),
  T.Literal('length'),
  T.Literal('content_filter')
]
cache['9f6218431a69f9e8706d01336b3e9914'] = T.Number()
cache['2a0d563490dcb656be5c27a37522d189'] = T.Object(
  {},
  {
    additionalProperties: T.Number()
  }
)
cache['8be09a57cc7ea8597f4677ca8f15b829'] = {
  text_offset: T.Optional(T.Array(cache['987434f426a7002fc01406e2ac533c03'])),
  token_logprobs: T.Optional(
    T.Array(cache['9f6218431a69f9e8706d01336b3e9914'])
  ),
  tokens: T.Optional(T.Array(cache['2809284b6e54d0d34017715ffe5636bd'])),
  top_logprobs: T.Optional(T.Array(cache['2a0d563490dcb656be5c27a37522d189']))
}
cache['3912fcbceb20c5f962b9478449425fc3'] = {
  finish_reason: T.Union(cache['55ff9a246f01e0bb7cdf862681370e23']),
  index: T.Integer(),
  logprobs: T.Object(cache['8be09a57cc7ea8597f4677ca8f15b829']),
  text: T.String()
}
cache['85304f864074a694ca6802605d36bd81'] = T.Object(
  cache['3912fcbceb20c5f962b9478449425fc3']
)
cache['4801d4d5414b9271bcfd61c4c3e2f430'] = [T.Literal('text_completion')]
cache['9e6c4887192a2980da29dc808136228b'] = {
  id: T.String(),
  choices: T.Array(cache['85304f864074a694ca6802605d36bd81']),
  created: T.Integer(),
  model: T.String(),
  system_fingerprint: T.Optional(T.String()),
  object: T.Union(cache['4801d4d5414b9271bcfd61c4c3e2f430']),
  usage: T.Optional(T.Object(cache['26b974e6ea7bd3e6b1a26b3f0b24db14']))
}
cache['73267142d4c574e0823dc51fcd6a57e7'] = [
  T.Literal('dall-e-2'),
  T.Literal('dall-e-3')
]
cache['9b289227759b563d23f835a8bc596164'] = [
  T.String(),
  T.Union(cache['73267142d4c574e0823dc51fcd6a57e7'])
]
cache['e9bb5370ea73196421042c48a824e1d9'] = [
  T.Literal('standard'),
  T.Literal('hd')
]
cache['3d8c5e31bbb404d3340ad2a0580333a5'] = [
  T.Literal('url'),
  T.Literal('b64_json')
]
cache['28cdc44e95a72ac61e6c6cffdc0bcde6'] = [
  T.Literal('256x256'),
  T.Literal('512x512'),
  T.Literal('1024x1024'),
  T.Literal('1792x1024'),
  T.Literal('1024x1792')
]
cache['6fdf3f4e3432e4f6e19bd82bad74f4ab'] = [
  T.Literal('vivid'),
  T.Literal('natural')
]
cache['378c1a1d01596ebee6b7df5e0e964c34'] = {
  prompt: T.String(),
  model: T.Optional(
    T.Union(cache['9b289227759b563d23f835a8bc596164'], { default: 'dall-e-2' })
  ),
  n: T.Optional(T.Integer({ minimum: 1, maximum: 10, default: 1 })),
  quality: T.Optional(
    T.Union(cache['e9bb5370ea73196421042c48a824e1d9'], { default: 'standard' })
  ),
  response_format: T.Optional(
    T.Union(cache['3d8c5e31bbb404d3340ad2a0580333a5'], { default: 'url' })
  ),
  size: T.Optional(
    T.Union(cache['28cdc44e95a72ac61e6c6cffdc0bcde6'], { default: '1024x1024' })
  ),
  style: T.Optional(
    T.Union(cache['6fdf3f4e3432e4f6e19bd82bad74f4ab'], { default: 'vivid' })
  ),
  user: T.Optional(T.String())
}
cache['11a791cdcf68079c8dfbde956e16407a'] = {
  b64_json: T.Optional(T.String()),
  url: T.Optional(T.String()),
  revised_prompt: T.Optional(T.String())
}
cache['74c7df8ff1614c30b313941d4e08c592'] = T.Object(
  cache['11a791cdcf68079c8dfbde956e16407a']
)
cache['6a214a678d3d983724191d71f53d3882'] = {
  created: T.Integer(),
  data: T.Array(cache['74c7df8ff1614c30b313941d4e08c592'])
}
cache['6a9bfd1893562361f46f3b50873bc5bc'] = [T.Literal('dall-e-2')]
cache['71c7fec47e3132ba29f0626344fd01e0'] = [
  T.String(),
  T.Union(cache['6a9bfd1893562361f46f3b50873bc5bc'])
]
cache['51be0f8aba8aba708eb29175d7efbe20'] = [
  T.Literal('256x256'),
  T.Literal('512x512'),
  T.Literal('1024x1024')
]
cache['e8f2c6f7f880ca40d8d13f2c1b49b320'] = {
  image: T.String({ format: 'binary' }),
  prompt: T.String(),
  mask: T.Optional(T.String({ format: 'binary' })),
  model: T.Optional(
    T.Union(cache['71c7fec47e3132ba29f0626344fd01e0'], { default: 'dall-e-2' })
  ),
  n: T.Optional(T.Integer({ minimum: 1, maximum: 10, default: 1 })),
  size: T.Optional(
    T.Union(cache['51be0f8aba8aba708eb29175d7efbe20'], { default: '1024x1024' })
  ),
  response_format: T.Optional(
    T.Union(cache['3d8c5e31bbb404d3340ad2a0580333a5'], { default: 'url' })
  ),
  user: T.Optional(T.String())
}
cache['fb2088789c6c61b655eb04b8ce15611a'] = {
  image: T.String({ format: 'binary' }),
  model: T.Optional(
    T.Union(cache['71c7fec47e3132ba29f0626344fd01e0'], { default: 'dall-e-2' })
  ),
  n: T.Optional(T.Integer({ minimum: 1, maximum: 10, default: 1 })),
  response_format: T.Optional(
    T.Union(cache['3d8c5e31bbb404d3340ad2a0580333a5'], { default: 'url' })
  ),
  size: T.Optional(
    T.Union(cache['51be0f8aba8aba708eb29175d7efbe20'], { default: '1024x1024' })
  ),
  user: T.Optional(T.String())
}
cache['72a90d6ad02fd89216ab20e7ebe4d0e1'] = T.String({ default: '' })
cache['49d9bafd312d3405c607681bb1ddc6bf'] = [
  T.String({ default: '' }),
  T.Array(cache['72a90d6ad02fd89216ab20e7ebe4d0e1'], {
    minItems: 1,
    maxItems: 2048
  }),
  T.Array(cache['987434f426a7002fc01406e2ac533c03'], {
    minItems: 1,
    maxItems: 2048
  }),
  T.Array(cache['592a7dccc6beda71b5e955bce07b7d38'], {
    minItems: 1,
    maxItems: 2048
  })
]
cache['f94c445fd23a9f2f7f928b706d768ca0'] = [
  T.Literal('text-embedding-ada-002'),
  T.Literal('text-embedding-3-small'),
  T.Literal('text-embedding-3-large')
]
cache['cfc82e1b60db51227078abafff30bbae'] = [
  T.String(),
  T.Union(cache['f94c445fd23a9f2f7f928b706d768ca0'])
]
cache['c78dba0818b79736ec95c780f0ea6993'] = [
  T.Literal('float'),
  T.Literal('base64')
]
cache['ccdf2e80da8a26530863685b9ab4c67f'] = {
  input: UnionOneOf(cache['49d9bafd312d3405c607681bb1ddc6bf']),
  model: T.Union(cache['cfc82e1b60db51227078abafff30bbae']),
  encoding_format: T.Optional(
    T.Union(cache['c78dba0818b79736ec95c780f0ea6993'], { default: 'float' })
  ),
  dimensions: T.Optional(T.Integer({ minimum: 1 })),
  user: T.Optional(T.String())
}
cache['fcb63603ee8609e6d3a054eb7f349098'] = [T.Literal('embedding')]
cache['92a40676f0c5249d788d0e90b23dafbb'] = {
  index: T.Integer(),
  embedding: T.Array(cache['9f6218431a69f9e8706d01336b3e9914']),
  object: T.Union(cache['fcb63603ee8609e6d3a054eb7f349098'])
}
cache['e90fe15253bc1b90ba267533d7f956ea'] = T.Object(
  cache['92a40676f0c5249d788d0e90b23dafbb']
)
cache['5f46a9600fba15d8b3f7142887fe8a93'] = [T.Literal('list')]
cache['be8c408a576c6ef5c33c5f0ae4bc0f02'] = {
  prompt_tokens: T.Integer(),
  total_tokens: T.Integer()
}
cache['341d2859131bfedcf2f42ec4742cbf17'] = {
  data: T.Array(cache['e90fe15253bc1b90ba267533d7f956ea']),
  model: T.String(),
  object: T.Union(cache['5f46a9600fba15d8b3f7142887fe8a93']),
  usage: T.Object(cache['be8c408a576c6ef5c33c5f0ae4bc0f02'])
}
cache['c1b0e5573b4bd39b7ece2a4180008ccb'] = [
  T.Literal('tts-1'),
  T.Literal('tts-1-hd')
]
cache['4035a692ee87970f329933944443ecf4'] = [
  T.String(),
  T.Union(cache['c1b0e5573b4bd39b7ece2a4180008ccb'])
]
cache['ac6a2db31cc84e4b3a5852c0c90bbecb'] = [
  T.Literal('alloy'),
  T.Literal('echo'),
  T.Literal('fable'),
  T.Literal('onyx'),
  T.Literal('nova'),
  T.Literal('shimmer')
]
cache['b67ac286f9e64d825f3788c2e7e9a6a9'] = [
  T.Literal('mp3'),
  T.Literal('opus'),
  T.Literal('aac'),
  T.Literal('flac'),
  T.Literal('wav'),
  T.Literal('pcm')
]
cache['0e5d01026ac12129c45911b934c108dc'] = {
  model: T.Union(cache['4035a692ee87970f329933944443ecf4']),
  input: T.String({ maxLength: 4096 }),
  voice: T.Union(cache['ac6a2db31cc84e4b3a5852c0c90bbecb']),
  response_format: T.Optional(
    T.Union(cache['b67ac286f9e64d825f3788c2e7e9a6a9'], { default: 'mp3' })
  ),
  speed: T.Optional(T.Number({ default: 1, minimum: 0.25, maximum: 4 }))
}
cache['ec3af709c721c5bbff825c4abc74b2f0'] = [T.Literal('whisper-1')]
cache['44957ef563e38d529e41fbf392f6291b'] = [
  T.String(),
  T.Union(cache['ec3af709c721c5bbff825c4abc74b2f0'])
]
cache['69fde07c72b934b7c91a2c1808b4bc59'] = [
  T.Literal('json'),
  T.Literal('text'),
  T.Literal('srt'),
  T.Literal('verbose_json'),
  T.Literal('vtt')
]
cache['d1037681caebe1d375a94366e4c14369'] = [
  T.Literal('word'),
  T.Literal('segment')
]
cache['1272a49c80b3dc8bc038af92e19f1d72'] = T.Union(
  cache['d1037681caebe1d375a94366e4c14369']
)
cache['cd1a2b32e62b1991943ff6a10cfe92a0'] = {
  file: T.String({ format: 'binary' }),
  model: T.Union(cache['44957ef563e38d529e41fbf392f6291b']),
  language: T.Optional(T.String()),
  prompt: T.Optional(T.String()),
  response_format: T.Optional(
    T.Union(cache['69fde07c72b934b7c91a2c1808b4bc59'], { default: 'json' })
  ),
  temperature: T.Optional(T.Number({ default: 0 })),
  'timestamp_granularities[]': T.Optional(
    T.Array(cache['1272a49c80b3dc8bc038af92e19f1d72'], { default: ['segment'] })
  )
}
cache['6057c21d25418b1df74f7d1f40564832'] = {
  text: T.String()
}
cache['7d40fe46e77cf9210b9e49ff02cd11df'] = {
  word: T.String(),
  start: T.Number({ format: 'float' }),
  end: T.Number({ format: 'float' })
}
cache['94a2da5e1fb58e44e64bfedfa99f8fb1'] = T.Object(
  cache['7d40fe46e77cf9210b9e49ff02cd11df']
)
cache['9997baee46d5a11c20b29a44c2da1cdd'] = {
  id: T.Integer(),
  seek: T.Integer(),
  start: T.Number({ format: 'float' }),
  end: T.Number({ format: 'float' }),
  text: T.String(),
  tokens: T.Array(cache['987434f426a7002fc01406e2ac533c03']),
  temperature: T.Number({ format: 'float' }),
  avg_logprob: T.Number({ format: 'float' }),
  compression_ratio: T.Number({ format: 'float' }),
  no_speech_prob: T.Number({ format: 'float' })
}
cache['419e2fe24dcd1ac5c3215c1595fcc04f'] = T.Object(
  cache['9997baee46d5a11c20b29a44c2da1cdd']
)
cache['99336b435aaca4e9b904674efb05eef1'] = {
  language: T.String(),
  duration: T.String(),
  text: T.String(),
  words: T.Optional(T.Array(cache['94a2da5e1fb58e44e64bfedfa99f8fb1'])),
  segments: T.Optional(T.Array(cache['419e2fe24dcd1ac5c3215c1595fcc04f']))
}
cache['e4d3829e51fff2d2b3e8618a55a78f5d'] = [
  T.Object(cache['6057c21d25418b1df74f7d1f40564832']),
  T.Object(cache['99336b435aaca4e9b904674efb05eef1'])
]
cache['ce56d7a02eda5fc5e1e6ae8f44b7df4d'] = {
  file: T.String({ format: 'binary' }),
  model: T.Union(cache['44957ef563e38d529e41fbf392f6291b']),
  prompt: T.Optional(T.String()),
  response_format: T.Optional(T.String({ default: 'json' })),
  temperature: T.Optional(T.Number({ default: 0 }))
}
cache['b8b74809e88818c33b81e19060b02636'] = {
  text: T.String()
}
cache['e844cb0a671d7eb4e3d747c1620f1fb4'] = {
  language: T.String(),
  duration: T.String(),
  text: T.String(),
  segments: T.Optional(T.Array(cache['419e2fe24dcd1ac5c3215c1595fcc04f']))
}
cache['214752c4df0a61ddb5233e00d403722e'] = [
  T.Object(cache['b8b74809e88818c33b81e19060b02636']),
  T.Object(cache['e844cb0a671d7eb4e3d747c1620f1fb4'])
]
cache['687890d30356063331d525bf9ed5b29d'] = T.Optional(
  T.String({ 'x-in': 'query' })
)
cache['5d9fccb5a3f83bf58e7a31f78fa56600'] = {
  purpose: cache['687890d30356063331d525bf9ed5b29d']
}
cache['347e609825e54ae0c940829bad5df8fd'] = [T.Literal('file')]
cache['a9ebcdee336c4c695563c0306c9e2e69'] = [
  T.Literal('assistants'),
  T.Literal('assistants_output'),
  T.Literal('batch'),
  T.Literal('batch_output'),
  T.Literal('fine-tune'),
  T.Literal('fine-tune-results'),
  T.Literal('vision')
]
cache['49606adc5a8e7f6f10e3724ffc1ceff2'] = [
  T.Literal('uploaded'),
  T.Literal('processed'),
  T.Literal('error')
]
cache['b251863b7c08fef2022f1521498922e9'] = {
  id: T.String(),
  bytes: T.Integer(),
  created_at: T.Integer(),
  filename: T.String(),
  object: T.Union(cache['347e609825e54ae0c940829bad5df8fd']),
  purpose: T.Union(cache['a9ebcdee336c4c695563c0306c9e2e69']),
  status: T.Union(cache['49606adc5a8e7f6f10e3724ffc1ceff2']),
  status_details: T.Optional(T.String())
}
cache['26b47708df7edec531d517fc5a5e717c'] = T.Object(
  cache['b251863b7c08fef2022f1521498922e9']
)
cache['69f3d06cf36beecb7106015b2019bf32'] = {
  data: T.Array(cache['26b47708df7edec531d517fc5a5e717c']),
  object: T.Union(cache['5f46a9600fba15d8b3f7142887fe8a93'])
}
cache['060b46fe2e77bfc0f3c72ecf966b57be'] = [
  T.Literal('assistants'),
  T.Literal('batch'),
  T.Literal('fine-tune'),
  T.Literal('vision')
]
cache['f1eaf98b29e72deca8f81354ebeefab6'] = {
  file: T.String({ format: 'binary' }),
  purpose: T.Union(cache['060b46fe2e77bfc0f3c72ecf966b57be'])
}
cache['a662c973d3053ed7848eb1e93cac2672'] = T.String({ 'x-in': 'path' })
cache['313598d7345ad28e456238f5691a68c8'] = {
  file_id: cache['a662c973d3053ed7848eb1e93cac2672']
}
cache['dbc502a1e44b3958fc05e41fc329da59'] = {
  id: T.String(),
  object: T.Union(cache['347e609825e54ae0c940829bad5df8fd']),
  deleted: T.Boolean()
}
cache['63d9466b04243ae34500477a25205563'] = {
  filename: T.String(),
  purpose: T.Union(cache['060b46fe2e77bfc0f3c72ecf966b57be']),
  bytes: T.Integer(),
  mime_type: T.String()
}
cache['d4daf5598dae08c72881b5b45d11c78d'] = [
  T.Literal('pending'),
  T.Literal('completed'),
  T.Literal('cancelled'),
  T.Literal('expired')
]
cache['6eaa1abf18342f31e7d2a49e7efe1b39'] = [T.Literal('upload')]
cache['3b836fb3a52aee8a6648db9e30836db5'] = {
  id: T.String(),
  created_at: T.Integer(),
  filename: T.String(),
  bytes: T.Integer(),
  purpose: T.String(),
  status: T.Union(cache['d4daf5598dae08c72881b5b45d11c78d']),
  expires_at: T.Integer(),
  object: T.Optional(T.Union(cache['6eaa1abf18342f31e7d2a49e7efe1b39'])),
  file: T.Optional(T.Object(cache['b251863b7c08fef2022f1521498922e9']))
}
cache['f179d6089d4d41101ce4e93294e45fde'] = T.String({ 'x-in': 'path' })
cache['498cc1453eb8ac1a69c74aa2abee6e25'] = {
  upload_id: cache['f179d6089d4d41101ce4e93294e45fde']
}
cache['8fb04687877d6ff4d083f397e24371cb'] = {
  data: T.String({ format: 'binary' })
}
cache['0d027544bc62bf989cf61938922b926d'] = [T.Literal('upload.part')]
cache['82b9938da6f29f2a4cd7fdcc660e811d'] = {
  id: T.String(),
  created_at: T.Integer(),
  upload_id: T.String(),
  object: T.Union(cache['0d027544bc62bf989cf61938922b926d'])
}
cache['664528ed31bd165f0169bbcf2e28621a'] = {
  part_ids: T.Array(cache['2809284b6e54d0d34017715ffe5636bd']),
  md5: T.Optional(T.String())
}
cache['77d6e381ad173ff9058164c41a6d2013'] = [
  T.Literal('babbage-002'),
  T.Literal('davinci-002'),
  T.Literal('gpt-3.5-turbo')
]
cache['ac0bc35a5a8d2ca7db96e3b42bba78df'] = [
  T.String(),
  T.Union(cache['77d6e381ad173ff9058164c41a6d2013'])
]
cache['bb7de6ef53ae40c684589415e01adfb9'] = [T.Literal('auto')]
cache['c897b66f97bc4df9ea3b072d8bb20d05'] = [
  T.Union(cache['bb7de6ef53ae40c684589415e01adfb9']),
  T.Integer({ minimum: 1, maximum: 256 })
]
cache['2a959f515fea5f7125279aae8ad876df'] = [
  T.Union(cache['bb7de6ef53ae40c684589415e01adfb9']),
  T.Number({ minimum: 0, exclusiveMinimum: true })
]
cache['588cea9c359f1b8ce65df6dae24b1c37'] = [
  T.Union(cache['bb7de6ef53ae40c684589415e01adfb9']),
  T.Integer({ minimum: 1, maximum: 50 })
]
cache['8a3123f5f76b0f17e6dd45dd2963d769'] = {
  batch_size: T.Optional(
    UnionOneOf(cache['c897b66f97bc4df9ea3b072d8bb20d05'], { default: 'auto' })
  ),
  learning_rate_multiplier: T.Optional(
    UnionOneOf(cache['2a959f515fea5f7125279aae8ad876df'], { default: 'auto' })
  ),
  n_epochs: T.Optional(
    UnionOneOf(cache['588cea9c359f1b8ce65df6dae24b1c37'], { default: 'auto' })
  )
}
cache['04ab457d8dbdb4f37ae6ed89ec41abde'] = [T.Literal('wandb')]
cache['82be2f28fab25b8ab864fadf08107a8e'] = [
  T.Union(cache['04ab457d8dbdb4f37ae6ed89ec41abde'])
]
cache['72e6ce84058bb6dc775e0522008e21af'] = T.String()
cache['5a1f01942ae3adf72aecdda74971c37c'] = {
  project: T.String(),
  name: T.Optional(T.String()),
  entity: T.Optional(T.String()),
  tags: T.Optional(T.Array(cache['72e6ce84058bb6dc775e0522008e21af']))
}
cache['009aa3392ec9843a62adb45ca4d9f544'] = {
  type: UnionOneOf(cache['82be2f28fab25b8ab864fadf08107a8e']),
  wandb: T.Object(cache['5a1f01942ae3adf72aecdda74971c37c'])
}
cache['1ed17ce64d8ebb75a28e7cc2e381a89b'] = T.Object(
  cache['009aa3392ec9843a62adb45ca4d9f544']
)
cache['cf2647be9ed63bc5488a87cb0d563e61'] = {
  model: T.Union(cache['ac0bc35a5a8d2ca7db96e3b42bba78df']),
  training_file: T.String(),
  hyperparameters: T.Optional(
    T.Object(cache['8a3123f5f76b0f17e6dd45dd2963d769'])
  ),
  suffix: T.Optional(T.String({ minLength: 1, maxLength: 40, default: null })),
  validation_file: T.Optional(T.String()),
  integrations: T.Optional(T.Array(cache['1ed17ce64d8ebb75a28e7cc2e381a89b'])),
  seed: T.Optional(T.Integer({ minimum: 0, maximum: 2147483647 }))
}
cache['3b4dcf2f8303b8126a86443e329103e8'] = {
  code: T.String(),
  message: T.String(),
  param: T.String()
}
cache['c611ae99e1deaae7df8f2c87c8048dfd'] = {
  n_epochs: UnionOneOf(cache['588cea9c359f1b8ce65df6dae24b1c37'], {
    default: 'auto'
  })
}
cache['86352d48fd767d6e1d6ca84afa74204c'] = [T.Literal('fine_tuning.job')]
cache['92595595f109f0542ed9142bd219ed77'] = T.String()
cache['71a1ce6d2b616ce38c6b7c7f168ee9bf'] = [
  T.Literal('validating_files'),
  T.Literal('queued'),
  T.Literal('running'),
  T.Literal('succeeded'),
  T.Literal('failed'),
  T.Literal('cancelled')
]
cache['61ff1a654058a8a4ae59b13ff2adaddc'] = {
  type: T.Union(cache['04ab457d8dbdb4f37ae6ed89ec41abde']),
  wandb: T.Object(cache['5a1f01942ae3adf72aecdda74971c37c'])
}
cache['93b719ffe4f35c4e96a1bd7a8cadda40'] = [
  T.Object(cache['61ff1a654058a8a4ae59b13ff2adaddc'])
]
cache['c4721d3b9d9fe2c665e72b80c8274641'] = UnionOneOf(
  cache['93b719ffe4f35c4e96a1bd7a8cadda40']
)
cache['f4831f54ade0faa46894bc4ab7d4ae34'] = {
  id: T.String(),
  created_at: T.Integer(),
  error: T.Object(cache['3b4dcf2f8303b8126a86443e329103e8']),
  fine_tuned_model: T.String(),
  finished_at: T.Integer(),
  hyperparameters: T.Object(cache['c611ae99e1deaae7df8f2c87c8048dfd']),
  model: T.String(),
  object: T.Union(cache['86352d48fd767d6e1d6ca84afa74204c']),
  organization_id: T.String(),
  result_files: T.Array(cache['92595595f109f0542ed9142bd219ed77']),
  status: T.Union(cache['71a1ce6d2b616ce38c6b7c7f168ee9bf']),
  trained_tokens: T.Integer(),
  training_file: T.String(),
  validation_file: T.String(),
  integrations: T.Optional(
    T.Array(cache['c4721d3b9d9fe2c665e72b80c8274641'], { maxItems: 5 })
  ),
  seed: T.Integer(),
  estimated_finish: T.Optional(T.Integer())
}
cache['9e384591635946e4611666b2da56b59b'] = T.Optional(
  T.String({ 'x-in': 'query' })
)
cache['2a39eecb56691eeeac6395fb10305bbd'] = T.Optional(
  T.Integer({ default: 20, 'x-in': 'query' })
)
cache['58953d15fba8bb0f5cd2c53aa3671d3a'] = {
  after: cache['9e384591635946e4611666b2da56b59b'],
  limit: cache['2a39eecb56691eeeac6395fb10305bbd']
}
cache['ce0748757b67dbb532fbcd96ed8ca4f0'] = T.Object(
  cache['f4831f54ade0faa46894bc4ab7d4ae34']
)
cache['424ddce3d1697042396663ce3e79c1db'] = {
  data: T.Array(cache['ce0748757b67dbb532fbcd96ed8ca4f0']),
  has_more: T.Boolean(),
  object: T.Union(cache['5f46a9600fba15d8b3f7142887fe8a93'])
}
cache['3548c4f535001b022fe3eace94bfa748'] = T.String({ 'x-in': 'path' })
cache['ef40b414cabe5d4a15d94b716cd9c2fc'] = {
  fine_tuning_job_id: cache['3548c4f535001b022fe3eace94bfa748']
}
cache['a7b9661a3a89d2d2f2a93cbf4deb72ed'] = T.String({ 'x-in': 'path' })
cache['aed544d9d14acecd14e47c8658fe8b0c'] = {
  fine_tuning_job_id: cache['a7b9661a3a89d2d2f2a93cbf4deb72ed']
}
cache['3c4bae5eb73e56aec18443c457bcbb69'] = T.Optional(
  T.String({ 'x-in': 'query' })
)
cache['58c603b37db63402810e111f249f0403'] = T.Optional(
  T.Integer({ default: 20, 'x-in': 'query' })
)
cache['47c4bbca653892d1d09e97b759ad3e7c'] = {
  after: cache['3c4bae5eb73e56aec18443c457bcbb69'],
  limit: cache['58c603b37db63402810e111f249f0403']
}
cache['d76fa98815c459c7ec1f682e813c40b5'] = [
  T.Literal('info'),
  T.Literal('warn'),
  T.Literal('error')
]
cache['25a7e1b7ece011822eabcab043d60dad'] = [T.Literal('fine_tuning.job.event')]
cache['bd0d77a8375da70d1dfa3094714766c5'] = {
  id: T.String(),
  created_at: T.Integer(),
  level: T.Union(cache['d76fa98815c459c7ec1f682e813c40b5']),
  message: T.String(),
  object: T.Union(cache['25a7e1b7ece011822eabcab043d60dad'])
}
cache['4a8a8237ce1b0907fbcca47a800f07bd'] = T.Object(
  cache['bd0d77a8375da70d1dfa3094714766c5']
)
cache['dc5e7404879b229d546a560a0ee7a760'] = {
  data: T.Array(cache['4a8a8237ce1b0907fbcca47a800f07bd']),
  object: T.Union(cache['5f46a9600fba15d8b3f7142887fe8a93'])
}
cache['4f8096b16a142d7589f874faaeed21d1'] = T.String({ 'x-in': 'path' })
cache['b34d480db9bee03d5900078d6818a239'] = {
  fine_tuning_job_id: cache['4f8096b16a142d7589f874faaeed21d1']
}
cache['dbb324123a0c26bbb6c23b446bf3fba0'] = T.String({ 'x-in': 'path' })
cache['f1f8bea1fa0038e1df2de20991ae76b4'] = {
  fine_tuning_job_id: cache['dbb324123a0c26bbb6c23b446bf3fba0']
}
cache['6ea10a2b4bba2129439debe8cadb9234'] = T.Optional(
  T.String({ 'x-in': 'query' })
)
cache['36d969d769c50def238c1f9265a0fbe6'] = T.Optional(
  T.Integer({ default: 10, 'x-in': 'query' })
)
cache['f4cfae83a3a8d31fd15057b5f6ec1cbc'] = {
  after: cache['6ea10a2b4bba2129439debe8cadb9234'],
  limit: cache['36d969d769c50def238c1f9265a0fbe6']
}
cache['90595ffcb768df1e2dd360e017792a4e'] = {
  step: T.Optional(T.Number()),
  train_loss: T.Optional(T.Number()),
  train_mean_token_accuracy: T.Optional(T.Number()),
  valid_loss: T.Optional(T.Number()),
  valid_mean_token_accuracy: T.Optional(T.Number()),
  full_valid_loss: T.Optional(T.Number()),
  full_valid_mean_token_accuracy: T.Optional(T.Number())
}
cache['f3fada57397d693a5b6f623e1d2e8f34'] = [
  T.Literal('fine_tuning.job.checkpoint')
]
cache['9c2939363b31d0970ce00ec483070c0d'] = {
  id: T.String(),
  created_at: T.Integer(),
  fine_tuned_model_checkpoint: T.String(),
  step_number: T.Integer(),
  metrics: T.Object(cache['90595ffcb768df1e2dd360e017792a4e']),
  fine_tuning_job_id: T.String(),
  object: T.Union(cache['f3fada57397d693a5b6f623e1d2e8f34'])
}
cache['fd2037850a7c5e8280fc4fe3328e91f6'] = T.Object(
  cache['9c2939363b31d0970ce00ec483070c0d']
)
cache['6400230492b2b2d36b76ab9c249e9a54'] = {
  data: T.Array(cache['fd2037850a7c5e8280fc4fe3328e91f6']),
  object: T.Union(cache['5f46a9600fba15d8b3f7142887fe8a93']),
  first_id: T.Optional(T.String()),
  last_id: T.Optional(T.String()),
  has_more: T.Boolean()
}
cache['34af3ce325db0daf825221217147924a'] = [T.Literal('model')]
cache['f985d5a3b7e93f0e5e42a79b59dd70b0'] = {
  id: T.String(),
  created: T.Integer(),
  object: T.Union(cache['34af3ce325db0daf825221217147924a']),
  owned_by: T.String()
}
cache['b8020ac66bac8ef549300aa7e3ecc5f9'] = T.Object(
  cache['f985d5a3b7e93f0e5e42a79b59dd70b0']
)
cache['de1770e98bcba00d335a758af486f2c0'] = {
  object: T.Union(cache['5f46a9600fba15d8b3f7142887fe8a93']),
  data: T.Array(cache['b8020ac66bac8ef549300aa7e3ecc5f9'])
}
cache['8bbbedaa27f05bea69e02053211e4905'] = T.String({ 'x-in': 'path' })
cache['ea5e0eb15decade39819bf8d1158e96c'] = {
  model: cache['8bbbedaa27f05bea69e02053211e4905']
}
cache['a27925e77dad43c46f3bef1e2d898e0b'] = T.String({ 'x-in': 'path' })
cache['60a9ef36d1ebefc9c74cb7fbf067b274'] = {
  model: cache['a27925e77dad43c46f3bef1e2d898e0b']
}
cache['3acb79c99fce6f7610e051543d60a3e1'] = {
  id: T.String(),
  deleted: T.Boolean(),
  object: T.String()
}
cache['1228baad2d3bc78962fbff03f2b669be'] = T.String({ default: '' })
cache['2213a2ff7efc8eaa1436fbff7f1eb5bd'] = [
  T.String({ default: '' }),
  T.Array(cache['1228baad2d3bc78962fbff03f2b669be'])
]
cache['c13cd0b8ea9918622c46e50c3ab2fb41'] = [
  T.Literal('text-moderation-latest'),
  T.Literal('text-moderation-stable')
]
cache['2998149294d38b61ee7fd34e5d9d9ba8'] = [
  T.String(),
  T.Union(cache['c13cd0b8ea9918622c46e50c3ab2fb41'])
]
cache['1e0461f5f1cdeb8cd7b5e3d707433c23'] = {
  input: UnionOneOf(cache['2213a2ff7efc8eaa1436fbff7f1eb5bd']),
  model: T.Optional(
    T.Union(cache['2998149294d38b61ee7fd34e5d9d9ba8'], {
      default: 'text-moderation-latest'
    })
  )
}
cache['e29d271a1b6fdc63e8fe47e1070664ab'] = {
  hate: T.Boolean(),
  'hate/threatening': T.Boolean(),
  harassment: T.Boolean(),
  'harassment/threatening': T.Boolean(),
  'self-harm': T.Boolean(),
  'self-harm/intent': T.Boolean(),
  'self-harm/instructions': T.Boolean(),
  sexual: T.Boolean(),
  'sexual/minors': T.Boolean(),
  violence: T.Boolean(),
  'violence/graphic': T.Boolean()
}
cache['a0764114359f0544e421407afd5970be'] = {
  hate: T.Number(),
  'hate/threatening': T.Number(),
  harassment: T.Number(),
  'harassment/threatening': T.Number(),
  'self-harm': T.Number(),
  'self-harm/intent': T.Number(),
  'self-harm/instructions': T.Number(),
  sexual: T.Number(),
  'sexual/minors': T.Number(),
  violence: T.Number(),
  'violence/graphic': T.Number()
}
cache['190b29588b5379b5272a6e0cc23181b4'] = {
  flagged: T.Boolean(),
  categories: T.Object(cache['e29d271a1b6fdc63e8fe47e1070664ab']),
  category_scores: T.Object(cache['a0764114359f0544e421407afd5970be'])
}
cache['7e0ec6556b81d3eccda11208465d7c04'] = T.Object(
  cache['190b29588b5379b5272a6e0cc23181b4']
)
cache['ca8dc0f3835cc7ceb7c69b0bcd79a64f'] = {
  id: T.String(),
  model: T.String(),
  results: T.Array(cache['7e0ec6556b81d3eccda11208465d7c04'])
}
cache['f623a9bcd22b23749f54a4c743f14723'] = T.Optional(
  T.Integer({ default: 20, 'x-in': 'query' })
)
cache['ef6372dbaa3ff1171b434dd2e8fee402'] = [
  T.Literal('asc'),
  T.Literal('desc')
]
cache['9232c4e0b51327472bc06783662d5340'] = T.Optional(
  T.Union(cache['ef6372dbaa3ff1171b434dd2e8fee402'], {
    default: 'desc',
    'x-in': 'query'
  })
)
cache['669dbe0c40a956bfaa0cc2edba3b679d'] = T.Optional(
  T.String({ 'x-in': 'query' })
)
cache['2fb3c631e3d98df924a69d7696a653cf'] = T.Optional(
  T.String({ 'x-in': 'query' })
)
cache['00ed673da5f8d0f8bdc2aec27c0d32f9'] = {
  limit: cache['f623a9bcd22b23749f54a4c743f14723'],
  order: cache['9232c4e0b51327472bc06783662d5340'],
  after: cache['669dbe0c40a956bfaa0cc2edba3b679d'],
  before: cache['2fb3c631e3d98df924a69d7696a653cf']
}
cache['2d4711c91803ab303abfd256fdb1170f'] = [T.Literal('code_interpreter')]
cache['6ba7f0abfc044550413da560fa4e703c'] = {
  type: T.Union(cache['2d4711c91803ab303abfd256fdb1170f'])
}
cache['3452c54e2704cafa4fe01757eef52cc2'] = [T.Literal('file_search')]
cache['6c5fac46ab8f95fec1fae879a1c84f42'] = {
  max_num_results: T.Optional(T.Integer({ minimum: 1, maximum: 50 }))
}
cache['d54cc671bec33fda68c9e56a26092c3b'] = {
  type: T.Union(cache['3452c54e2704cafa4fe01757eef52cc2']),
  file_search: T.Optional(T.Object(cache['6c5fac46ab8f95fec1fae879a1c84f42']))
}
cache['144a45ac135d53cd2172c86dcbee741a'] = {
  type: T.Union(cache['78a70c640dc014fc048915402571c97d']),
  function: T.Object(cache['8a0e72bd020a90249508a3d6f36a7983'])
}
cache['ec24d68030bb231a38e2d4e4e7c6ad8b'] = [
  T.Object(cache['6ba7f0abfc044550413da560fa4e703c']),
  T.Object(cache['d54cc671bec33fda68c9e56a26092c3b']),
  T.Object(cache['144a45ac135d53cd2172c86dcbee741a'])
]
cache['1a940c74617f188b00495cc5646b35c3'] = UnionOneOf(
  cache['ec24d68030bb231a38e2d4e4e7c6ad8b']
)
cache['3e367ff7017c69420ad2ca6a167715eb'] = {
  file_ids: T.Optional(
    T.Array(cache['2809284b6e54d0d34017715ffe5636bd'], {
      default: [],
      maxItems: 20
    })
  )
}
cache['5cd5b5093f76769f8b5e7f5aa5b0fc95'] = {
  vector_store_ids: T.Optional(
    T.Array(cache['2809284b6e54d0d34017715ffe5636bd'], { maxItems: 1 })
  )
}
cache['58cd8880cabfc621a1ff44cb6d731dd5'] = {
  code_interpreter: T.Optional(
    T.Object(cache['3e367ff7017c69420ad2ca6a167715eb'])
  ),
  file_search: T.Optional(T.Object(cache['5cd5b5093f76769f8b5e7f5aa5b0fc95']))
}
cache['1685f604549943aeffead7cd3c3ceb39'] = [
  T.Union(cache['3ac88d6b8d6a10864b1d3d17a22b2331']),
  T.Object(cache['a78b3d57182ec82d9a9cc20e003f1569'])
]
cache['7882b5109074218a773e2d39166a7be5'] = {
  id: T.String(),
  object: T.Union(cache['9539c841c419e9057d56191a46591cf8']),
  created_at: T.Integer(),
  name: T.String({ maxLength: 256 }),
  description: T.String({ maxLength: 512 }),
  model: T.String(),
  instructions: T.String({ maxLength: 256000 }),
  tools: T.Array(cache['1a940c74617f188b00495cc5646b35c3'], {
    default: [],
    maxItems: 128
  }),
  tool_resources: T.Optional(
    T.Object(cache['58cd8880cabfc621a1ff44cb6d731dd5'])
  ),
  metadata: T.Object({}),
  temperature: T.Optional(T.Number({ minimum: 0, maximum: 2, default: 1 })),
  top_p: T.Optional(T.Number({ minimum: 0, maximum: 1, default: 1 })),
  response_format: T.Optional(
    UnionOneOf(cache['1685f604549943aeffead7cd3c3ceb39'])
  )
}
cache['27994ed8d447de9c1abb16832c1573c7'] = T.Object(
  cache['7882b5109074218a773e2d39166a7be5']
)
cache['9081c315ba1338b89748aa0b6479391d'] = {
  object: T.String(),
  data: T.Array(cache['27994ed8d447de9c1abb16832c1573c7']),
  first_id: T.String(),
  last_id: T.String(),
  has_more: T.Boolean()
}
cache['daa36173b6ea025ef524518979260c40'] = [
  T.Literal('gpt-4o'),
  T.Literal('gpt-4o-2024-05-13'),
  T.Literal('gpt-4o-mini'),
  T.Literal('gpt-4o-mini-2024-07-18'),
  T.Literal('gpt-4-turbo'),
  T.Literal('gpt-4-turbo-2024-04-09'),
  T.Literal('gpt-4-0125-preview'),
  T.Literal('gpt-4-turbo-preview'),
  T.Literal('gpt-4-1106-preview'),
  T.Literal('gpt-4-vision-preview'),
  T.Literal('gpt-4'),
  T.Literal('gpt-4-0314'),
  T.Literal('gpt-4-0613'),
  T.Literal('gpt-4-32k'),
  T.Literal('gpt-4-32k-0314'),
  T.Literal('gpt-4-32k-0613'),
  T.Literal('gpt-3.5-turbo'),
  T.Literal('gpt-3.5-turbo-16k'),
  T.Literal('gpt-3.5-turbo-0613'),
  T.Literal('gpt-3.5-turbo-1106'),
  T.Literal('gpt-3.5-turbo-0125'),
  T.Literal('gpt-3.5-turbo-16k-0613')
]
cache['885cb050b3b9ed2b0e21615861668056'] = [
  T.String(),
  T.Union(cache['daa36173b6ea025ef524518979260c40'])
]
cache['dd13372e4cad0d92178b435a3c9ab80a'] = {
  file_ids: T.Optional(
    T.Array(cache['2809284b6e54d0d34017715ffe5636bd'], {
      default: [],
      maxItems: 20
    })
  )
}
cache['ad173ecb3fecd54e7efbb3c209b773b5'] = [T.Object({}), T.Object({})]
cache['4044533822793c67d69dc65af3a9f770'] = {
  code_interpreter: T.Optional(
    T.Object(cache['dd13372e4cad0d92178b435a3c9ab80a'])
  ),
  file_search: T.Optional(
    UnionOneOf(cache['ad173ecb3fecd54e7efbb3c209b773b5'], {
      properties: {
        vector_store_ids: {
          type: 'array',
          description:
            'The [vector store](/docs/api-reference/vector-stores/object) attached to this assistant. There can be a maximum of 1 vector store attached to the assistant.\n',
          maxItems: 1,
          items: { type: 'string' }
        },
        vector_stores: {
          type: 'array',
          description:
            'A helper to create a [vector store](/docs/api-reference/vector-stores/object) with file_ids and attach it to this assistant. There can be a maximum of 1 vector store attached to the assistant.\n',
          maxItems: 1,
          items: {
            type: 'object',
            properties: {
              file_ids: {
                type: 'array',
                description:
                  'A list of [file](/docs/api-reference/files) IDs to add to the vector store. There can be a maximum of 10000 files in a vector store.\n',
                maxItems: 10000,
                items: { type: 'string' }
              },
              chunking_strategy: {
                type: 'object',
                description:
                  'The chunking strategy used to chunk the file(s). If not set, will use the `auto` strategy.',
                oneOf: [
                  {
                    type: 'object',
                    title: 'Auto Chunking Strategy',
                    description:
                      'The default strategy. This strategy currently uses a `max_chunk_size_tokens` of `800` and `chunk_overlap_tokens` of `400`.',
                    additionalProperties: false,
                    properties: {
                      type: {
                        type: 'string',
                        description: 'Always `auto`.',
                        enum: ['auto']
                      }
                    },
                    required: ['type']
                  },
                  {
                    type: 'object',
                    title: 'Static Chunking Strategy',
                    additionalProperties: false,
                    properties: {
                      type: {
                        type: 'string',
                        description: 'Always `static`.',
                        enum: ['static']
                      },
                      static: {
                        type: 'object',
                        additionalProperties: false,
                        properties: {
                          max_chunk_size_tokens: {
                            type: 'integer',
                            minimum: 100,
                            maximum: 4096,
                            description:
                              'The maximum number of tokens in each chunk. The default value is `800`. The minimum value is `100` and the maximum value is `4096`.'
                          },
                          chunk_overlap_tokens: {
                            type: 'integer',
                            description:
                              'The number of tokens that overlap between chunks. The default value is `400`.\n\nNote that the overlap must not exceed half of `max_chunk_size_tokens`.\n'
                          }
                        },
                        required: [
                          'max_chunk_size_tokens',
                          'chunk_overlap_tokens'
                        ]
                      }
                    },
                    required: ['type', 'static']
                  }
                ],
                'x-oaiExpandable': true
              },
              metadata: {
                type: 'object',
                description:
                  'Set of 16 key-value pairs that can be attached to a vector store. This can be useful for storing additional information about the vector store in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.\n',
                'x-oaiTypeLabel': 'map'
              }
            }
          }
        }
      }
    })
  )
}
cache['7520e1a7c95f8ccdef2c8eda02751aaa'] = {
  model: T.Union(cache['885cb050b3b9ed2b0e21615861668056']),
  name: T.Optional(T.String({ maxLength: 256 })),
  description: T.Optional(T.String({ maxLength: 512 })),
  instructions: T.Optional(T.String({ maxLength: 256000 })),
  tools: T.Optional(
    T.Array(cache['1a940c74617f188b00495cc5646b35c3'], {
      default: [],
      maxItems: 128
    })
  ),
  tool_resources: T.Optional(
    T.Object(cache['4044533822793c67d69dc65af3a9f770'])
  ),
  metadata: T.Optional(T.Object({})),
  temperature: T.Optional(T.Number({ minimum: 0, maximum: 2, default: 1 })),
  top_p: T.Optional(T.Number({ minimum: 0, maximum: 1, default: 1 })),
  response_format: T.Optional(
    UnionOneOf(cache['1685f604549943aeffead7cd3c3ceb39'])
  )
}
cache['b7c88f3b10b7ecd5c207a5605e52b0b7'] = T.String({ 'x-in': 'path' })
cache['f5eef158e61c2b13755b4f05c38af46a'] = {
  assistant_id: cache['b7c88f3b10b7ecd5c207a5605e52b0b7']
}
cache['4e450c0dd9a6db15230240cf25ceb576'] = T.String({ 'x-in': 'path' })
cache['dd0e49988a038fbe96bb85ce7b811637'] = {
  assistant_id: cache['4e450c0dd9a6db15230240cf25ceb576']
}
cache['d1a31e0bb35010b7ee10521b4ca26315'] = [T.String()]
cache['f0e98ca620611bea264da8a491976734'] = {
  file_ids: T.Optional(
    T.Array(cache['2809284b6e54d0d34017715ffe5636bd'], {
      default: [],
      maxItems: 20
    })
  )
}
cache['7458f51864f4030b8a07e70af0030b97'] = {
  vector_store_ids: T.Optional(
    T.Array(cache['2809284b6e54d0d34017715ffe5636bd'], { maxItems: 1 })
  )
}
cache['c22b57ff451a3589c71824fde7c2c9b4'] = {
  code_interpreter: T.Optional(
    T.Object(cache['f0e98ca620611bea264da8a491976734'])
  ),
  file_search: T.Optional(T.Object(cache['7458f51864f4030b8a07e70af0030b97']))
}
cache['95ecfc7eed16d50c8a786902f0c3fed8'] = {
  model: T.Optional(T.Union(cache['d1a31e0bb35010b7ee10521b4ca26315'])),
  name: T.Optional(T.String({ maxLength: 256 })),
  description: T.Optional(T.String({ maxLength: 512 })),
  instructions: T.Optional(T.String({ maxLength: 256000 })),
  tools: T.Optional(
    T.Array(cache['1a940c74617f188b00495cc5646b35c3'], {
      default: [],
      maxItems: 128
    })
  ),
  tool_resources: T.Optional(
    T.Object(cache['c22b57ff451a3589c71824fde7c2c9b4'])
  ),
  metadata: T.Optional(T.Object({})),
  temperature: T.Optional(T.Number({ minimum: 0, maximum: 2, default: 1 })),
  top_p: T.Optional(T.Number({ minimum: 0, maximum: 1, default: 1 })),
  response_format: T.Optional(
    UnionOneOf(cache['1685f604549943aeffead7cd3c3ceb39'])
  )
}
cache['7636420f358ab07dd4e6b6d371fcb946'] = T.String({ 'x-in': 'path' })
cache['dd97105ffc02ac90d008a244359fe4ac'] = {
  assistant_id: cache['7636420f358ab07dd4e6b6d371fcb946']
}
cache['188571b3511c8f2957256a19aff14098'] = [T.Literal('assistant.deleted')]
cache['83c5a807ac0ebfe253fb808ae9798153'] = {
  id: T.String(),
  deleted: T.Boolean(),
  object: T.Union(cache['188571b3511c8f2957256a19aff14098'])
}
cache['ce7338e23aeb865b84c76f56c481b024'] = [
  T.Literal('user'),
  T.Literal('assistant')
]
cache['8df0c81d3ca064c9306f9021ceb3c8e0'] = [T.Literal('image_file')]
cache['8416cfea4f5cd25ff14298572301f73d'] = {
  file_id: T.String(),
  detail: T.Optional(
    T.Union(cache['b6e923bf33eb0750767826c1d9964735'], { default: 'auto' })
  )
}
cache['057e362af536dff5c62509e7c0d26217'] = {
  type: T.Union(cache['8df0c81d3ca064c9306f9021ceb3c8e0']),
  image_file: T.Object(cache['8416cfea4f5cd25ff14298572301f73d'])
}
cache['15f1b9fcfb5bf62173fb8539d6755c2e'] = {
  url: T.String({ format: 'uri' }),
  detail: T.Optional(
    T.Union(cache['b6e923bf33eb0750767826c1d9964735'], { default: 'auto' })
  )
}
cache['eafa27404f5be1f4e0c7382dcac6aa1b'] = {
  type: T.Union(cache['e1d87ce7f2ba3e461f4b247c81666007']),
  image_url: T.Object(cache['15f1b9fcfb5bf62173fb8539d6755c2e'])
}
cache['8721d6be86e9e1099dff9fb1547d5fe4'] = {
  type: T.Union(cache['c42dc14ef7b27cca8ac3b833a00c7de8']),
  text: T.String()
}
cache['0c1863ebac1c8f4e4e20d3082dcdce42'] = [
  T.Object(cache['057e362af536dff5c62509e7c0d26217']),
  T.Object(cache['eafa27404f5be1f4e0c7382dcac6aa1b']),
  T.Object(cache['8721d6be86e9e1099dff9fb1547d5fe4'])
]
cache['d85c7d39df528ac7c7eda762427e3ebd'] = UnionOneOf(
  cache['0c1863ebac1c8f4e4e20d3082dcdce42']
)
cache['b5a5f3342ac3885ea48a8c27025257df'] = [
  T.String(),
  T.Array(cache['d85c7d39df528ac7c7eda762427e3ebd'], { minItems: 1 })
]
cache['f56074624619b5dae66c88acf4bc359b'] = {
  type: T.Union(cache['3452c54e2704cafa4fe01757eef52cc2'])
}
cache['4272af6d8ec62d399da92cb4b7074c90'] = [
  T.Object(cache['6ba7f0abfc044550413da560fa4e703c']),
  T.Object(cache['f56074624619b5dae66c88acf4bc359b'])
]
cache['b630310d6509c394b7780963684a46f2'] = UnionOneOf(
  cache['4272af6d8ec62d399da92cb4b7074c90']
)
cache['7302deba548cb00bbf945f0cb4ecbbcd'] = {
  file_id: T.Optional(T.String()),
  tools: T.Optional(T.Array(cache['b630310d6509c394b7780963684a46f2']))
}
cache['958b7fe18327e1ed7b7acb451f7ea8dc'] = T.Object(
  cache['7302deba548cb00bbf945f0cb4ecbbcd']
)
cache['dfc91097389707b177bd01c35e017eaa'] = {
  role: T.Union(cache['ce7338e23aeb865b84c76f56c481b024']),
  content: UnionOneOf(cache['b5a5f3342ac3885ea48a8c27025257df']),
  attachments: T.Optional(
    T.Array(cache['958b7fe18327e1ed7b7acb451f7ea8dc'], {
      required: ['file_id', 'tools']
    })
  ),
  metadata: T.Optional(T.Object({}))
}
cache['84bbb7752a10f5d44dccd8f211b233db'] = T.Object(
  cache['dfc91097389707b177bd01c35e017eaa'],
  {
    additionalProperties: false
  }
)
cache['4b8355c7a5062583c425a4a3a164eb53'] = {
  code_interpreter: T.Optional(
    T.Object(cache['dd13372e4cad0d92178b435a3c9ab80a'])
  ),
  file_search: T.Optional(
    UnionOneOf(cache['ad173ecb3fecd54e7efbb3c209b773b5'], {
      properties: {
        vector_store_ids: {
          type: 'array',
          description:
            'The [vector store](/docs/api-reference/vector-stores/object) attached to this thread. There can be a maximum of 1 vector store attached to the thread.\n',
          maxItems: 1,
          items: { type: 'string' }
        },
        vector_stores: {
          type: 'array',
          description:
            'A helper to create a [vector store](/docs/api-reference/vector-stores/object) with file_ids and attach it to this thread. There can be a maximum of 1 vector store attached to the thread.\n',
          maxItems: 1,
          items: {
            type: 'object',
            properties: {
              file_ids: {
                type: 'array',
                description:
                  'A list of [file](/docs/api-reference/files) IDs to add to the vector store. There can be a maximum of 10000 files in a vector store.\n',
                maxItems: 10000,
                items: { type: 'string' }
              },
              chunking_strategy: {
                type: 'object',
                description:
                  'The chunking strategy used to chunk the file(s). If not set, will use the `auto` strategy.',
                oneOf: [
                  {
                    type: 'object',
                    title: 'Auto Chunking Strategy',
                    description:
                      'The default strategy. This strategy currently uses a `max_chunk_size_tokens` of `800` and `chunk_overlap_tokens` of `400`.',
                    additionalProperties: false,
                    properties: {
                      type: {
                        type: 'string',
                        description: 'Always `auto`.',
                        enum: ['auto']
                      }
                    },
                    required: ['type']
                  },
                  {
                    type: 'object',
                    title: 'Static Chunking Strategy',
                    additionalProperties: false,
                    properties: {
                      type: {
                        type: 'string',
                        description: 'Always `static`.',
                        enum: ['static']
                      },
                      static: {
                        type: 'object',
                        additionalProperties: false,
                        properties: {
                          max_chunk_size_tokens: {
                            type: 'integer',
                            minimum: 100,
                            maximum: 4096,
                            description:
                              'The maximum number of tokens in each chunk. The default value is `800`. The minimum value is `100` and the maximum value is `4096`.'
                          },
                          chunk_overlap_tokens: {
                            type: 'integer',
                            description:
                              'The number of tokens that overlap between chunks. The default value is `400`.\n\nNote that the overlap must not exceed half of `max_chunk_size_tokens`.\n'
                          }
                        },
                        required: [
                          'max_chunk_size_tokens',
                          'chunk_overlap_tokens'
                        ]
                      }
                    },
                    required: ['type', 'static']
                  }
                ],
                'x-oaiExpandable': true
              },
              metadata: {
                type: 'object',
                description:
                  'Set of 16 key-value pairs that can be attached to a vector store. This can be useful for storing additional information about the vector store in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.\n',
                'x-oaiTypeLabel': 'map'
              }
            },
            'x-oaiExpandable': true
          }
        }
      }
    })
  )
}
cache['12819c881a5e74b6f58a9f0891043262'] = {
  messages: T.Optional(T.Array(cache['84bbb7752a10f5d44dccd8f211b233db'])),
  tool_resources: T.Optional(
    T.Object(cache['4b8355c7a5062583c425a4a3a164eb53'])
  ),
  metadata: T.Optional(T.Object({}))
}
cache['bbb1d862e64955ff1dd9f455d78be593'] = [T.Literal('thread')]
cache['de654a817f6b54fa2d02abc80e4636b9'] = {
  vector_store_ids: T.Optional(
    T.Array(cache['2809284b6e54d0d34017715ffe5636bd'], { maxItems: 1 })
  )
}
cache['33ab457cd0c7df9ae54ed29b00daa2a5'] = {
  code_interpreter: T.Optional(
    T.Object(cache['dd13372e4cad0d92178b435a3c9ab80a'])
  ),
  file_search: T.Optional(T.Object(cache['de654a817f6b54fa2d02abc80e4636b9']))
}
cache['843eeaceedb08259af683687a0aa2bdf'] = {
  id: T.String(),
  object: T.Union(cache['bbb1d862e64955ff1dd9f455d78be593']),
  created_at: T.Integer(),
  tool_resources: T.Object(cache['33ab457cd0c7df9ae54ed29b00daa2a5']),
  metadata: T.Object({})
}
cache['c9c0f3922b08f76f62ba333db5535ad8'] = T.String({ 'x-in': 'path' })
cache['2366494be21ce9b8eb9877111fdec21a'] = {
  thread_id: cache['c9c0f3922b08f76f62ba333db5535ad8']
}
cache['9b6699eac27d8d122c499d600740a1fd'] = T.String({ 'x-in': 'path' })
cache['7273293413ffa9055c2481b1cd3d4642'] = {
  thread_id: cache['9b6699eac27d8d122c499d600740a1fd']
}
cache['1c720356a35580bcf8e4b9b5a920ed57'] = {
  tool_resources: T.Optional(
    T.Object(cache['33ab457cd0c7df9ae54ed29b00daa2a5'])
  ),
  metadata: T.Optional(T.Object({}))
}
cache['21295d4738240c124db4bd98da432e17'] = T.String({ 'x-in': 'path' })
cache['73c04a68437b0c946c43407635b42e71'] = {
  thread_id: cache['21295d4738240c124db4bd98da432e17']
}
cache['d1b42a05e36b0e76b99ef3ec801504be'] = [T.Literal('thread.deleted')]
cache['9939d1955732b534db457a6302c78878'] = {
  id: T.String(),
  deleted: T.Boolean(),
  object: T.Union(cache['d1b42a05e36b0e76b99ef3ec801504be'])
}
cache['7ff93907ac7c63221f924a8cd3763015'] = T.String({ 'x-in': 'path' })
cache['3611c4f70d67730538f1c94ff6f6cb93'] = {
  thread_id: cache['7ff93907ac7c63221f924a8cd3763015']
}
cache['fd55bb2580269555667cb9fb3d170471'] = T.Optional(
  T.String({ 'x-in': 'query' })
)
cache['be683abc499e874ff4a72d3af0b7804b'] = {
  limit: cache['f623a9bcd22b23749f54a4c743f14723'],
  order: cache['9232c4e0b51327472bc06783662d5340'],
  after: cache['669dbe0c40a956bfaa0cc2edba3b679d'],
  before: cache['2fb3c631e3d98df924a69d7696a653cf'],
  run_id: cache['fd55bb2580269555667cb9fb3d170471']
}
cache['fdf81bca7aa68ea2b22cb1d7325ff0f0'] = [T.Literal('thread.message')]
cache['2b3b190a0295db2c6da9292a7b0fea9a'] = [
  T.Literal('in_progress'),
  T.Literal('incomplete'),
  T.Literal('completed')
]
cache['d1a4e9430b353499a6af819e4e7a03c4'] = [
  T.Literal('content_filter'),
  T.Literal('max_tokens'),
  T.Literal('run_cancelled'),
  T.Literal('run_expired'),
  T.Literal('run_failed')
]
cache['3835f4fb661aeafd731a61629ea32dd2'] = {
  reason: T.Union(cache['d1a4e9430b353499a6af819e4e7a03c4'])
}
cache['2f6e6687d4a7b009489f47f846edb873'] = [T.Literal('file_citation')]
cache['e8d6861efa4be94c0182a9701c37688e'] = {
  file_id: T.String()
}
cache['b451fd37b4d64d72fd7b3eda45094708'] = {
  type: T.Union(cache['2f6e6687d4a7b009489f47f846edb873']),
  text: T.String(),
  file_citation: T.Object(cache['e8d6861efa4be94c0182a9701c37688e']),
  start_index: T.Integer({ minimum: 0 }),
  end_index: T.Integer({ minimum: 0 })
}
cache['4584091a0faf66f9266c50d0181f406e'] = [T.Literal('file_path')]
cache['59b88bffcdb1ef8492a5dd5b25d76723'] = {
  file_id: T.String()
}
cache['923b42080f94604245ea25b07159bf56'] = {
  type: T.Union(cache['4584091a0faf66f9266c50d0181f406e']),
  text: T.String(),
  file_path: T.Object(cache['59b88bffcdb1ef8492a5dd5b25d76723']),
  start_index: T.Integer({ minimum: 0 }),
  end_index: T.Integer({ minimum: 0 })
}
cache['ffb21ad24051a8df015db352c88fb97e'] = [
  T.Object(cache['b451fd37b4d64d72fd7b3eda45094708']),
  T.Object(cache['923b42080f94604245ea25b07159bf56'])
]
cache['8d1c447e0cb817cb5dae36a1bd9534b8'] = UnionOneOf(
  cache['ffb21ad24051a8df015db352c88fb97e']
)
cache['96c1158217e9f95cef7e04fc15f0abf0'] = {
  value: T.String(),
  annotations: T.Array(cache['8d1c447e0cb817cb5dae36a1bd9534b8'])
}
cache['8a6b960cacf351db2aeb36df07bd437f'] = {
  type: T.Union(cache['c42dc14ef7b27cca8ac3b833a00c7de8']),
  text: T.Object(cache['96c1158217e9f95cef7e04fc15f0abf0'])
}
cache['01f3f9fe9aba37a7f7ea7aca4de5183a'] = [
  T.Object(cache['057e362af536dff5c62509e7c0d26217']),
  T.Object(cache['eafa27404f5be1f4e0c7382dcac6aa1b']),
  T.Object(cache['8a6b960cacf351db2aeb36df07bd437f'])
]
cache['8bd4ecb40e2fe58622f63200040f870f'] = UnionOneOf(
  cache['01f3f9fe9aba37a7f7ea7aca4de5183a']
)
cache['9919ce439b06e6cb45eba3bc75cbb9a6'] = {
  id: T.String(),
  object: T.Union(cache['fdf81bca7aa68ea2b22cb1d7325ff0f0']),
  created_at: T.Integer(),
  thread_id: T.String(),
  status: T.Union(cache['2b3b190a0295db2c6da9292a7b0fea9a']),
  incomplete_details: T.Object(cache['3835f4fb661aeafd731a61629ea32dd2']),
  completed_at: T.Integer(),
  incomplete_at: T.Integer(),
  role: T.Union(cache['ce7338e23aeb865b84c76f56c481b024']),
  content: T.Array(cache['8bd4ecb40e2fe58622f63200040f870f']),
  assistant_id: T.String(),
  run_id: T.String(),
  attachments: T.Array(cache['958b7fe18327e1ed7b7acb451f7ea8dc']),
  metadata: T.Object({})
}
cache['217c0a904514b4777748af4100f32f79'] = T.Object(
  cache['9919ce439b06e6cb45eba3bc75cbb9a6']
)
cache['59d3dec5b533735db4e2f3a3e16561d7'] = {
  object: T.String(),
  data: T.Array(cache['217c0a904514b4777748af4100f32f79']),
  first_id: T.String(),
  last_id: T.String(),
  has_more: T.Boolean()
}
cache['8d6dbeaa028d1150d3d0795d6367d765'] = T.String({ 'x-in': 'path' })
cache['41d908fb513fb358207880c572c1af3e'] = {
  thread_id: cache['8d6dbeaa028d1150d3d0795d6367d765']
}
cache['d74dea2dcc9909e2d598bfa18b7d253c'] = T.String({ 'x-in': 'path' })
cache['5d6e1e9a550f7e73bd7c216141a5bd45'] = T.String({ 'x-in': 'path' })
cache['d4d12030e061f44c9c55afbdf463eafd'] = {
  thread_id: cache['d74dea2dcc9909e2d598bfa18b7d253c'],
  message_id: cache['5d6e1e9a550f7e73bd7c216141a5bd45']
}
cache['c804d4c22a18a14eafb37e9b1bb3a662'] = T.String({ 'x-in': 'path' })
cache['03e8dae332db8c97ea1a82678ea4824e'] = T.String({ 'x-in': 'path' })
cache['fbca0ddc436612e084f356472689bcb2'] = {
  thread_id: cache['c804d4c22a18a14eafb37e9b1bb3a662'],
  message_id: cache['03e8dae332db8c97ea1a82678ea4824e']
}
cache['e72516203ab15db84c83493e3c34ce40'] = {
  metadata: T.Optional(T.Object({}))
}
cache['eba8acd44e15850a2c6904ad2e52f9dd'] = T.String({ 'x-in': 'path' })
cache['117a5a0b2e983845bfea3395f50556a3'] = {
  thread_id: cache['c804d4c22a18a14eafb37e9b1bb3a662'],
  message_id: cache['eba8acd44e15850a2c6904ad2e52f9dd']
}
cache['ffa535f0ed6a2ee3b82c73c77b1f8614'] = [
  T.Literal('thread.message.deleted')
]
cache['9abc628d8039f81daf13b967df78ff44'] = {
  id: T.String(),
  deleted: T.Boolean(),
  object: T.Union(cache['ffa535f0ed6a2ee3b82c73c77b1f8614'])
}
cache['9851d512f6dcdc5167bb2cd5a8d2253d'] = UnionOneOf(
  cache['ec24d68030bb231a38e2d4e4e7c6ad8b']
)
cache['e553d962202ad98c892ef51b0eafe9ce'] = {
  code_interpreter: T.Optional(
    T.Object(cache['dd13372e4cad0d92178b435a3c9ab80a'])
  ),
  file_search: T.Optional(T.Object(cache['5cd5b5093f76769f8b5e7f5aa5b0fc95']))
}
cache['9e99b0691b0131d0d941a69d10a2e05f'] = [
  T.Literal('auto'),
  T.Literal('last_messages')
]
cache['b6d4dbea7badacde9ce3f7c625314a5e'] = {
  type: T.Union(cache['9e99b0691b0131d0d941a69d10a2e05f']),
  last_messages: T.Optional(T.Integer({ minimum: 1 }))
}
cache['fce7d2141607a403e6120ebda148c5ff'] = [
  T.Literal('function'),
  T.Literal('code_interpreter'),
  T.Literal('file_search')
]
cache['952d397f2e2cc6bd8e8a7ff5b554f7c1'] = {
  type: T.Union(cache['fce7d2141607a403e6120ebda148c5ff']),
  function: T.Optional(T.Object(cache['58244a1afb20970b3d9cbb13f1afbd6e']))
}
cache['d1537d93df4305d126d6a2834fd25f2c'] = [
  T.Union(cache['d1784237940345e8f72caffb309dc71f']),
  T.Object(cache['952d397f2e2cc6bd8e8a7ff5b554f7c1'])
]
cache['2aa38b2cf412659a625c062134f34400'] = {
  assistant_id: T.String(),
  thread: T.Optional(
    T.Object(cache['12819c881a5e74b6f58a9f0891043262'], {
      additionalProperties: false
    })
  ),
  model: T.Optional(T.Union(cache['885cb050b3b9ed2b0e21615861668056'])),
  instructions: T.Optional(T.String()),
  tools: T.Optional(
    T.Array(cache['9851d512f6dcdc5167bb2cd5a8d2253d'], { maxItems: 20 })
  ),
  tool_resources: T.Optional(
    T.Object(cache['e553d962202ad98c892ef51b0eafe9ce'])
  ),
  metadata: T.Optional(T.Object({})),
  temperature: T.Optional(T.Number({ minimum: 0, maximum: 2, default: 1 })),
  top_p: T.Optional(T.Number({ minimum: 0, maximum: 1, default: 1 })),
  stream: T.Optional(T.Boolean()),
  max_prompt_tokens: T.Optional(T.Integer({ minimum: 256 })),
  max_completion_tokens: T.Optional(T.Integer({ minimum: 256 })),
  truncation_strategy: T.Optional(
    T.Object(cache['b6d4dbea7badacde9ce3f7c625314a5e'])
  ),
  tool_choice: T.Optional(
    UnionOneOf(cache['d1537d93df4305d126d6a2834fd25f2c'])
  ),
  parallel_tool_calls: T.Optional(T.Boolean({ default: true })),
  response_format: T.Optional(
    UnionOneOf(cache['1685f604549943aeffead7cd3c3ceb39'])
  )
}
cache['d80cd1e3854ba5e2381c884bdf57e959'] = [T.Literal('thread.run')]
cache['481f05b4d377451bdfb2f5cf8f395e30'] = [
  T.Literal('queued'),
  T.Literal('in_progress'),
  T.Literal('requires_action'),
  T.Literal('cancelling'),
  T.Literal('cancelled'),
  T.Literal('failed'),
  T.Literal('completed'),
  T.Literal('incomplete'),
  T.Literal('expired')
]
cache['55c90b25f00a0ed4f22d5fbc39898723'] = [T.Literal('submit_tool_outputs')]
cache['84d980d57129ff6adae923adaa41bf39'] = {
  name: T.String(),
  arguments: T.String()
}
cache['93c4cc2f26696eb059d1c44f9ea0aa71'] = {
  id: T.String(),
  type: T.Union(cache['78a70c640dc014fc048915402571c97d']),
  function: T.Object(cache['84d980d57129ff6adae923adaa41bf39'])
}
cache['fd8ea5c756c895c97bb9d94a6dad1953'] = T.Object(
  cache['93c4cc2f26696eb059d1c44f9ea0aa71']
)
cache['6d5f636dabd9e7c26ccfcff2b650f03f'] = {
  tool_calls: T.Array(cache['fd8ea5c756c895c97bb9d94a6dad1953'])
}
cache['d6bee616b9f201ce36eda0b48344334e'] = {
  type: T.Union(cache['55c90b25f00a0ed4f22d5fbc39898723']),
  submit_tool_outputs: T.Object(cache['6d5f636dabd9e7c26ccfcff2b650f03f'])
}
cache['1b961c4dacd4513a507a2aac77bd709d'] = [
  T.Literal('server_error'),
  T.Literal('rate_limit_exceeded'),
  T.Literal('invalid_prompt')
]
cache['038bfc78cf96da4d063225a6226f5ff1'] = {
  code: T.Union(cache['1b961c4dacd4513a507a2aac77bd709d']),
  message: T.String()
}
cache['bfbcef97039e90367afef3a1cc90d39d'] = [
  T.Literal('max_completion_tokens'),
  T.Literal('max_prompt_tokens')
]
cache['cb88684ef27ac4eac5a3c46739d70b17'] = {
  reason: T.Optional(T.Union(cache['bfbcef97039e90367afef3a1cc90d39d']))
}
cache['da66f4ee7c397f4a92cad313900752ae'] = {
  completion_tokens: T.Integer(),
  prompt_tokens: T.Integer(),
  total_tokens: T.Integer()
}
cache['ca4149ebb610524f2504d5efcb933037'] = {
  id: T.String(),
  object: T.Union(cache['d80cd1e3854ba5e2381c884bdf57e959']),
  created_at: T.Integer(),
  thread_id: T.String(),
  assistant_id: T.String(),
  status: T.Union(cache['481f05b4d377451bdfb2f5cf8f395e30']),
  required_action: T.Object(cache['d6bee616b9f201ce36eda0b48344334e']),
  last_error: T.Object(cache['038bfc78cf96da4d063225a6226f5ff1']),
  expires_at: T.Integer(),
  started_at: T.Integer(),
  cancelled_at: T.Integer(),
  failed_at: T.Integer(),
  completed_at: T.Integer(),
  incomplete_details: T.Object(cache['cb88684ef27ac4eac5a3c46739d70b17']),
  model: T.String(),
  instructions: T.String(),
  tools: T.Array(cache['1a940c74617f188b00495cc5646b35c3'], {
    default: [],
    maxItems: 20
  }),
  metadata: T.Object({}),
  usage: T.Object(cache['da66f4ee7c397f4a92cad313900752ae']),
  temperature: T.Optional(T.Number()),
  top_p: T.Optional(T.Number()),
  max_prompt_tokens: T.Integer({ minimum: 256 }),
  max_completion_tokens: T.Integer({ minimum: 256 }),
  truncation_strategy: T.Object(cache['b6d4dbea7badacde9ce3f7c625314a5e']),
  tool_choice: UnionOneOf(cache['d1537d93df4305d126d6a2834fd25f2c']),
  parallel_tool_calls: T.Boolean({ default: true }),
  response_format: UnionOneOf(cache['1685f604549943aeffead7cd3c3ceb39'])
}
cache['4f60a62fee58ff3fcf3e34fc26bb647f'] = T.String({ 'x-in': 'path' })
cache['a0ec30453187155d4ab35c046259e40e'] = {
  thread_id: cache['4f60a62fee58ff3fcf3e34fc26bb647f']
}
cache['bcf801333f75c675748501c283538208'] = T.Object(
  cache['ca4149ebb610524f2504d5efcb933037']
)
cache['a7527aec923b3c24c4a77e5b5b347ee3'] = {
  object: T.String(),
  data: T.Array(cache['bcf801333f75c675748501c283538208']),
  first_id: T.String(),
  last_id: T.String(),
  has_more: T.Boolean()
}
cache['c0f34bdee90baa543e7b47f6dea7899f'] = T.String({ 'x-in': 'path' })
cache['51e260731530a59a0cb37faedb5f0a6f'] = {
  thread_id: cache['c0f34bdee90baa543e7b47f6dea7899f']
}
cache['889c497d349b903ef8b7e66f1f7f1f78'] = {
  assistant_id: T.String(),
  model: T.Optional(T.Union(cache['885cb050b3b9ed2b0e21615861668056'])),
  instructions: T.Optional(T.String()),
  additional_instructions: T.Optional(T.String()),
  additional_messages: T.Optional(
    T.Array(cache['84bbb7752a10f5d44dccd8f211b233db'])
  ),
  tools: T.Optional(
    T.Array(cache['1a940c74617f188b00495cc5646b35c3'], { maxItems: 20 })
  ),
  metadata: T.Optional(T.Object({})),
  temperature: T.Optional(T.Number({ minimum: 0, maximum: 2, default: 1 })),
  top_p: T.Optional(T.Number({ minimum: 0, maximum: 1, default: 1 })),
  stream: T.Optional(T.Boolean()),
  max_prompt_tokens: T.Optional(T.Integer({ minimum: 256 })),
  max_completion_tokens: T.Optional(T.Integer({ minimum: 256 })),
  truncation_strategy: T.Optional(
    T.Object(cache['b6d4dbea7badacde9ce3f7c625314a5e'])
  ),
  tool_choice: T.Optional(
    UnionOneOf(cache['d1537d93df4305d126d6a2834fd25f2c'])
  ),
  parallel_tool_calls: T.Optional(T.Boolean({ default: true })),
  response_format: T.Optional(
    UnionOneOf(cache['1685f604549943aeffead7cd3c3ceb39'])
  )
}
cache['afa42f2f59920bf647a27ce48ffe34a3'] = T.String({ 'x-in': 'path' })
cache['1b8e1630be39d43903dd51079dadef20'] = T.String({ 'x-in': 'path' })
cache['c4e7dad4927de29148261c74707a24be'] = {
  thread_id: cache['afa42f2f59920bf647a27ce48ffe34a3'],
  run_id: cache['1b8e1630be39d43903dd51079dadef20']
}
cache['11f687ec7d991d230b5e84b66d9217f0'] = T.String({ 'x-in': 'path' })
cache['b088e7f74ac7e36a1e9ed8d96aa142e7'] = {
  thread_id: cache['afa42f2f59920bf647a27ce48ffe34a3'],
  run_id: cache['11f687ec7d991d230b5e84b66d9217f0']
}
cache['3a98d3941f8338263eef602de1762764'] = T.String({ 'x-in': 'path' })
cache['9bad9520030a881c32d037aa916c63f6'] = T.String({ 'x-in': 'path' })
cache['c6c4bc41389d1b97c63f61351e7e2e40'] = {
  thread_id: cache['3a98d3941f8338263eef602de1762764'],
  run_id: cache['9bad9520030a881c32d037aa916c63f6']
}
cache['901eb3a4908361a7eff5380fcfbfd71f'] = {
  tool_call_id: T.Optional(T.String()),
  output: T.Optional(T.String())
}
cache['be2ce82b121d2ed57f519d746b8a99c7'] = T.Object(
  cache['901eb3a4908361a7eff5380fcfbfd71f']
)
cache['2a39b62dc91107419a6b6b45a2fd3cde'] = {
  tool_outputs: T.Array(cache['be2ce82b121d2ed57f519d746b8a99c7']),
  stream: T.Optional(T.Boolean())
}
cache['b8fa4d8479ac5abd1cfc197c3d1e89fc'] = T.String({ 'x-in': 'path' })
cache['2b4f29ad4596b4b37f2ac1d18d9e7be2'] = T.String({ 'x-in': 'path' })
cache['919a50c78f95a064b8ce8888e5a7feb8'] = {
  thread_id: cache['b8fa4d8479ac5abd1cfc197c3d1e89fc'],
  run_id: cache['2b4f29ad4596b4b37f2ac1d18d9e7be2']
}
cache['8e1a2d12820c1077344fd4e46f67df71'] = T.String({ 'x-in': 'path' })
cache['b0ccf23ea751641f28efae3adfec8e12'] = T.String({ 'x-in': 'path' })
cache['a98f3716ff05056e3907ed6dd04dd57d'] = {
  thread_id: cache['8e1a2d12820c1077344fd4e46f67df71'],
  run_id: cache['b0ccf23ea751641f28efae3adfec8e12']
}
cache['ef9486a38d654f5f38ec49f1230a02e4'] = [T.Literal('thread.run.step')]
cache['4b72ddf772b8f929ad40da16f255d2aa'] = [
  T.Literal('message_creation'),
  T.Literal('tool_calls')
]
cache['786dab01211818739dbe99a3d78923a7'] = [
  T.Literal('in_progress'),
  T.Literal('cancelled'),
  T.Literal('failed'),
  T.Literal('completed'),
  T.Literal('expired')
]
cache['b20564ad044bd9504bd100e6cab1b7d6'] = [T.Literal('message_creation')]
cache['84622944795035f0c072d60c4a698814'] = {
  message_id: T.String()
}
cache['7341a2e6b5b7ef84dae480cd8e7ee1e9'] = {
  type: T.Union(cache['b20564ad044bd9504bd100e6cab1b7d6']),
  message_creation: T.Object(cache['84622944795035f0c072d60c4a698814'])
}
cache['29d983b1b08e777df7766537f30bbc8b'] = [T.Literal('tool_calls')]
cache['784ff3ff024857449af0bbed9b0edefe'] = [T.Literal('logs')]
cache['2dae3289e35ff93bd96a0ab44c7e38b9'] = {
  type: T.Union(cache['784ff3ff024857449af0bbed9b0edefe']),
  logs: T.String()
}
cache['9dd10c71f1b76291165a18f47086a7c1'] = [T.Literal('image')]
cache['fd930a3dddbcda9b855f6ca95865f495'] = {
  file_id: T.String()
}
cache['1095c9779fbfeb9a60166770440713c5'] = {
  type: T.Union(cache['9dd10c71f1b76291165a18f47086a7c1']),
  image: T.Object(cache['fd930a3dddbcda9b855f6ca95865f495'])
}
cache['6400fbb3b9160d2ebee8cc6da749cfa9'] = [
  T.Object(cache['2dae3289e35ff93bd96a0ab44c7e38b9']),
  T.Object(cache['1095c9779fbfeb9a60166770440713c5'])
]
cache['6bc25b3d9244096867769f32cf993103'] = UnionOneOf(
  cache['6400fbb3b9160d2ebee8cc6da749cfa9']
)
cache['dca9dc4ede560556314dfdf333b2b7c7'] = {
  input: T.String(),
  outputs: T.Array(cache['6bc25b3d9244096867769f32cf993103'])
}
cache['530736f08989089adcfcd56bf3259f4e'] = {
  id: T.String(),
  type: T.Union(cache['2d4711c91803ab303abfd256fdb1170f']),
  code_interpreter: T.Object(cache['dca9dc4ede560556314dfdf333b2b7c7'])
}
cache['2f188caf7404c22c7e647eefaf915f1a'] = {
  id: T.String(),
  type: T.Union(cache['3452c54e2704cafa4fe01757eef52cc2']),
  file_search: T.Object({})
}
cache['8340f0b94fe566d8ae9b0a61093917da'] = {
  name: T.String(),
  arguments: T.String(),
  output: T.String()
}
cache['fac4366cb736fe71dcaa3d14deb14c5f'] = {
  id: T.String(),
  type: T.Union(cache['78a70c640dc014fc048915402571c97d']),
  function: T.Object(cache['8340f0b94fe566d8ae9b0a61093917da'])
}
cache['7f79258e0f99028fafdc3fe858836e30'] = [
  T.Object(cache['530736f08989089adcfcd56bf3259f4e']),
  T.Object(cache['2f188caf7404c22c7e647eefaf915f1a']),
  T.Object(cache['fac4366cb736fe71dcaa3d14deb14c5f'])
]
cache['d66db088d4466dc3406c1ccf975823db'] = UnionOneOf(
  cache['7f79258e0f99028fafdc3fe858836e30']
)
cache['9f3aa0a0196de37a7ffc5353ea27fa3a'] = {
  type: T.Union(cache['29d983b1b08e777df7766537f30bbc8b']),
  tool_calls: T.Array(cache['d66db088d4466dc3406c1ccf975823db'])
}
cache['d14fc9b4ddb996c7363471871ae2f8dd'] = [
  T.Object(cache['7341a2e6b5b7ef84dae480cd8e7ee1e9']),
  T.Object(cache['9f3aa0a0196de37a7ffc5353ea27fa3a'])
]
cache['bf6c2412c5bf4f94845247a8cce557cd'] = [
  T.Literal('server_error'),
  T.Literal('rate_limit_exceeded')
]
cache['201e31be95293f5196342cea86419bc4'] = {
  code: T.Union(cache['bf6c2412c5bf4f94845247a8cce557cd']),
  message: T.String()
}
cache['22b945819fb99309d5bf225b5d31281b'] = {
  completion_tokens: T.Integer(),
  prompt_tokens: T.Integer(),
  total_tokens: T.Integer()
}
cache['854aaaa64b1e916bcd12f8e453be1319'] = {
  id: T.String(),
  object: T.Union(cache['ef9486a38d654f5f38ec49f1230a02e4']),
  created_at: T.Integer(),
  assistant_id: T.String(),
  thread_id: T.String(),
  run_id: T.String(),
  type: T.Union(cache['4b72ddf772b8f929ad40da16f255d2aa']),
  status: T.Union(cache['786dab01211818739dbe99a3d78923a7']),
  step_details: UnionOneOf(cache['d14fc9b4ddb996c7363471871ae2f8dd']),
  last_error: T.Object(cache['201e31be95293f5196342cea86419bc4']),
  expired_at: T.Integer(),
  cancelled_at: T.Integer(),
  failed_at: T.Integer(),
  completed_at: T.Integer(),
  metadata: T.Object({}),
  usage: T.Object(cache['22b945819fb99309d5bf225b5d31281b'])
}
cache['2fd32906f26b5b603425d209d4c99a6d'] = T.Object(
  cache['854aaaa64b1e916bcd12f8e453be1319']
)
cache['e52dccee327d5a8f917ad2553f54a22a'] = {
  object: T.String(),
  data: T.Array(cache['2fd32906f26b5b603425d209d4c99a6d']),
  first_id: T.String(),
  last_id: T.String(),
  has_more: T.Boolean()
}
cache['d7d14d8e9933d4d108ae66ba947c36bd'] = T.String({ 'x-in': 'path' })
cache['4c789c6f1a7a402296754482bc32674c'] = T.String({ 'x-in': 'path' })
cache['ea67c805244048f4a48bf01091f132e7'] = T.String({ 'x-in': 'path' })
cache['29990e860512d3007a6d0821f2df00d8'] = {
  thread_id: cache['d7d14d8e9933d4d108ae66ba947c36bd'],
  run_id: cache['4c789c6f1a7a402296754482bc32674c'],
  step_id: cache['ea67c805244048f4a48bf01091f132e7']
}
cache['05d1a1996a558960fbaa3be8d8e85500'] = [T.Literal('vector_store')]
cache['ddd7a08133c6b889a4a0c77e525fd546'] = {
  in_progress: T.Integer(),
  completed: T.Integer(),
  failed: T.Integer(),
  cancelled: T.Integer(),
  total: T.Integer()
}
cache['e9cc3adfc5e29a0eccf7202b069faff4'] = [
  T.Literal('expired'),
  T.Literal('in_progress'),
  T.Literal('completed')
]
cache['2f0a8c3aacfb4e9d031fe1c2262fcacc'] = [T.Literal('last_active_at')]
cache['497041f3f833dcb471822d03a9157276'] = {
  anchor: T.Union(cache['2f0a8c3aacfb4e9d031fe1c2262fcacc']),
  days: T.Integer({ minimum: 1, maximum: 365 })
}
cache['106f91aac5881e610e7179d48348abbb'] = {
  id: T.String(),
  object: T.Union(cache['05d1a1996a558960fbaa3be8d8e85500']),
  created_at: T.Integer(),
  name: T.String(),
  usage_bytes: T.Integer(),
  file_counts: T.Object(cache['ddd7a08133c6b889a4a0c77e525fd546']),
  status: T.Union(cache['e9cc3adfc5e29a0eccf7202b069faff4']),
  expires_after: T.Optional(
    T.Object(cache['497041f3f833dcb471822d03a9157276'])
  ),
  expires_at: T.Optional(T.Integer()),
  last_active_at: T.Integer(),
  metadata: T.Object({})
}
cache['592b5b927009dc4e09a1bd9679ce786f'] = T.Object(
  cache['106f91aac5881e610e7179d48348abbb']
)
cache['ff74fee0b40c9e2f94ce4aaa9f863cc9'] = {
  object: T.String(),
  data: T.Array(cache['592b5b927009dc4e09a1bd9679ce786f']),
  first_id: T.String(),
  last_id: T.String(),
  has_more: T.Boolean()
}
cache['22d359b68212ad54c64a4e3a3b548024'] = {
  type: T.Union(cache['bb7de6ef53ae40c684589415e01adfb9'])
}
cache['1eafa3b2f869a5ebf4639aa9ca63fd49'] = [T.Literal('static')]
cache['29c111f913b37f58cdbde793f02345b5'] = {
  max_chunk_size_tokens: T.Integer({ minimum: 100, maximum: 4096 }),
  chunk_overlap_tokens: T.Integer()
}
cache['1d8e536284b22230424471ec1eaa0afa'] = {
  type: T.Union(cache['1eafa3b2f869a5ebf4639aa9ca63fd49']),
  static: T.Object(cache['29c111f913b37f58cdbde793f02345b5'], {
    additionalProperties: false
  })
}
cache['60d0bd0eaf0d798d127886a0c5667be7'] = [
  T.Object(cache['22d359b68212ad54c64a4e3a3b548024'], {
    additionalProperties: false
  }),
  T.Object(cache['1d8e536284b22230424471ec1eaa0afa'], {
    additionalProperties: false
  })
]
cache['bb490d308693e8cdd597c0ee42323db6'] = {
  file_ids: T.Optional(
    T.Array(cache['2809284b6e54d0d34017715ffe5636bd'], { maxItems: 500 })
  ),
  name: T.Optional(T.String()),
  expires_after: T.Optional(
    T.Object(cache['497041f3f833dcb471822d03a9157276'])
  ),
  chunking_strategy: T.Optional(
    UnionOneOf(cache['60d0bd0eaf0d798d127886a0c5667be7'])
  ),
  metadata: T.Optional(T.Object({}))
}
cache['f775700f71bd2f9fd0258515a217188e'] = T.String({ 'x-in': 'path' })
cache['e4b1b7dd4b14d50e5bd0c9ddd5d33286'] = {
  vector_store_id: cache['f775700f71bd2f9fd0258515a217188e']
}
cache['3a8ed5caa6f5fb006d49f7b5d4906742'] = T.String({ 'x-in': 'path' })
cache['f65d5eea2ede29c9d262a74b9f49d055'] = {
  vector_store_id: cache['3a8ed5caa6f5fb006d49f7b5d4906742']
}
cache['89224ea2a0ac9d6f9f0f50a60a5780dd'] = {
  name: T.Optional(T.String()),
  expires_after: T.Optional(
    T.Object(cache['497041f3f833dcb471822d03a9157276'])
  ),
  metadata: T.Optional(T.Object({}))
}
cache['bafac01022af26da32632c3b8917d043'] = T.String({ 'x-in': 'path' })
cache['8dd11ad92b9242f0285cf92d0b1c0286'] = {
  vector_store_id: cache['bafac01022af26da32632c3b8917d043']
}
cache['f06aface639e6662cada449f97d7f26b'] = [T.Literal('vector_store.deleted')]
cache['3cf239f84a4a43b6d81c8ef36c8b3c6c'] = {
  id: T.String(),
  deleted: T.Boolean(),
  object: T.Union(cache['f06aface639e6662cada449f97d7f26b'])
}
cache['48ab5d84cc248a10dc3dba1be8d5adb2'] = T.String({ 'x-in': 'path' })
cache['546de948e6308c89852c9c106d58d9d3'] = {
  vector_store_id: cache['48ab5d84cc248a10dc3dba1be8d5adb2']
}
cache['9d6cdc7c9d20318fd32b1f6a21bd0c57'] = [
  T.Literal('in_progress'),
  T.Literal('completed'),
  T.Literal('failed'),
  T.Literal('cancelled')
]
cache['471e5155ceb0591516d1b3a7629ae934'] = T.Optional(
  T.Union(cache['9d6cdc7c9d20318fd32b1f6a21bd0c57'], { 'x-in': 'query' })
)
cache['cbe79cc9e800b0f7dedcc853786f0dda'] = {
  limit: cache['f623a9bcd22b23749f54a4c743f14723'],
  order: cache['9232c4e0b51327472bc06783662d5340'],
  after: cache['669dbe0c40a956bfaa0cc2edba3b679d'],
  before: cache['2fb3c631e3d98df924a69d7696a653cf'],
  filter: cache['471e5155ceb0591516d1b3a7629ae934']
}
cache['97ada83595b60664d42d1f2f31bd95a9'] = [T.Literal('vector_store.file')]
cache['75b309b7794910e5e9a46c00da0fe984'] = [
  T.Literal('in_progress'),
  T.Literal('completed'),
  T.Literal('cancelled'),
  T.Literal('failed')
]
cache['062aceea97acdbd054e3c63a65c40e74'] = [
  T.Literal('internal_error'),
  T.Literal('file_not_found'),
  T.Literal('parsing_error'),
  T.Literal('unhandled_mime_type')
]
cache['0ef437eec8c9ce7400debe5b9a12603a'] = {
  code: T.Union(cache['062aceea97acdbd054e3c63a65c40e74']),
  message: T.String()
}
cache['b137bbcba6187c63705ed403bc551593'] = [T.Literal('other')]
cache['1fec2e9d01288cd17b5bfa655df4a3eb'] = {
  type: T.Union(cache['b137bbcba6187c63705ed403bc551593'])
}
cache['0c257001f05708e9f1e258df5297ebaf'] = [
  T.Object(cache['1d8e536284b22230424471ec1eaa0afa'], {
    additionalProperties: false
  }),
  T.Object(cache['1fec2e9d01288cd17b5bfa655df4a3eb'], {
    additionalProperties: false
  })
]
cache['4cfbe31ffd0b4e4eb1b22150bb0f2967'] = {
  id: T.String(),
  object: T.Union(cache['97ada83595b60664d42d1f2f31bd95a9']),
  usage_bytes: T.Integer(),
  created_at: T.Integer(),
  vector_store_id: T.String(),
  status: T.Union(cache['75b309b7794910e5e9a46c00da0fe984']),
  last_error: T.Object(cache['0ef437eec8c9ce7400debe5b9a12603a']),
  chunking_strategy: T.Optional(
    UnionOneOf(cache['0c257001f05708e9f1e258df5297ebaf'])
  )
}
cache['1203eca8fdf456c023808b630b7f98ee'] = T.Object(
  cache['4cfbe31ffd0b4e4eb1b22150bb0f2967']
)
cache['fe5638ea0024ceb6efb6cd1bb3123c9e'] = {
  object: T.String(),
  data: T.Array(cache['1203eca8fdf456c023808b630b7f98ee']),
  first_id: T.String(),
  last_id: T.String(),
  has_more: T.Boolean()
}
cache['95f72ad2c46850bd8a34359285f3d312'] = T.String({ 'x-in': 'path' })
cache['05e213dbdf2ba57e4f5cb6c66d23b9e6'] = {
  vector_store_id: cache['95f72ad2c46850bd8a34359285f3d312']
}
cache['ea7e7440bc7428abf277aa8ee93183ae'] = {
  file_id: T.String(),
  chunking_strategy: T.Optional(
    UnionOneOf(cache['60d0bd0eaf0d798d127886a0c5667be7'])
  )
}
cache['b03a68099ba91b0b1eac8146f51545b0'] = T.String({ 'x-in': 'path' })
cache['1af9aedafe6952148a34e472e409704b'] = T.String({ 'x-in': 'path' })
cache['9cbf3bf0882e6bb4e57e7af6642167f9'] = {
  vector_store_id: cache['b03a68099ba91b0b1eac8146f51545b0'],
  file_id: cache['1af9aedafe6952148a34e472e409704b']
}
cache['9a69d8abbdfc9ec84e9ccfb271e94a61'] = T.String({ 'x-in': 'path' })
cache['084575d0af9070aed91dd52595c3881b'] = T.String({ 'x-in': 'path' })
cache['2b5166643e372af6b57c8654ca24f390'] = {
  vector_store_id: cache['9a69d8abbdfc9ec84e9ccfb271e94a61'],
  file_id: cache['084575d0af9070aed91dd52595c3881b']
}
cache['b39a8ddceba3925b621d76cb3967f287'] = [
  T.Literal('vector_store.file.deleted')
]
cache['6ea46d7ad422330b1c96d02366583a97'] = {
  id: T.String(),
  deleted: T.Boolean(),
  object: T.Union(cache['b39a8ddceba3925b621d76cb3967f287'])
}
cache['1a40f7b03cf50a49b40fc25ec02cb887'] = T.String({ 'x-in': 'path' })
cache['3ecd3793a6bef4c614966479c9b8fe2b'] = {
  vector_store_id: cache['1a40f7b03cf50a49b40fc25ec02cb887']
}
cache['cd92fc6b54146a71b64b6ef1f72c6e7f'] = {
  file_ids: T.Array(cache['2809284b6e54d0d34017715ffe5636bd'], {
    minItems: 1,
    maxItems: 500
  }),
  chunking_strategy: T.Optional(
    UnionOneOf(cache['60d0bd0eaf0d798d127886a0c5667be7'])
  )
}
cache['6b07278a919a0e5978da21aaba65fe9f'] = [
  T.Literal('vector_store.files_batch')
]
cache['47e563ed83e5abf9378c427950ee773d'] = {
  in_progress: T.Integer(),
  completed: T.Integer(),
  failed: T.Integer(),
  cancelled: T.Integer(),
  total: T.Integer()
}
cache['faab15370c6ceb87be31157f86ef9c4d'] = {
  id: T.String(),
  object: T.Union(cache['6b07278a919a0e5978da21aaba65fe9f']),
  created_at: T.Integer(),
  vector_store_id: T.String(),
  status: T.Union(cache['75b309b7794910e5e9a46c00da0fe984']),
  file_counts: T.Object(cache['47e563ed83e5abf9378c427950ee773d'])
}
cache['812f4f608083f647b81dad0ac8512677'] = T.String({ 'x-in': 'path' })
cache['5a48685fffe6a434b7e8f8f16212be72'] = T.String({ 'x-in': 'path' })
cache['7382cf97dd9361e7496fe62a161eafe0'] = {
  vector_store_id: cache['812f4f608083f647b81dad0ac8512677'],
  batch_id: cache['5a48685fffe6a434b7e8f8f16212be72']
}
cache['cdf578e693f32d38ea5aa0115e58efff'] = T.String({ 'x-in': 'path' })
cache['66fac73e951f9609f22a7e2fdc135fa8'] = T.String({ 'x-in': 'path' })
cache['18dfbefad078b465ca74296519cb3530'] = {
  vector_store_id: cache['cdf578e693f32d38ea5aa0115e58efff'],
  batch_id: cache['66fac73e951f9609f22a7e2fdc135fa8']
}
cache['3aaeb6e63fd96e0c8e07114481e955b8'] = T.String({ 'x-in': 'path' })
cache['4ec6fe4f9d647e7cd6bb799f76d53b87'] = {
  vector_store_id: cache['48ab5d84cc248a10dc3dba1be8d5adb2'],
  batch_id: cache['3aaeb6e63fd96e0c8e07114481e955b8']
}
cache['5c78ac2de94c8fae39862e59409f6e18'] = [
  T.Literal('/v1/chat/completions'),
  T.Literal('/v1/embeddings'),
  T.Literal('/v1/completions')
]
cache['8d56c6797c654494367f27ae344227b2'] = [T.Literal('24h')]
cache['36d0e17dc9401aaf7fedb03cb865e3b0'] = {
  input_file_id: T.String(),
  endpoint: T.Union(cache['5c78ac2de94c8fae39862e59409f6e18']),
  completion_window: T.Union(cache['8d56c6797c654494367f27ae344227b2']),
  metadata: T.Optional(
    T.Object(
      {},
      {
        additionalProperties: T.String()
      }
    )
  )
}
cache['82c296b1522d7c43a5f3acf37dee9ab9'] = [T.Literal('batch')]
cache['3cadd5cbab9ace62453e4d27fb82d5a1'] = {
  code: T.Optional(T.String()),
  message: T.Optional(T.String()),
  param: T.Optional(T.String()),
  line: T.Optional(T.Integer())
}
cache['cd24d00d9ee54e135ff0182095534b79'] = T.Object(
  cache['3cadd5cbab9ace62453e4d27fb82d5a1']
)
cache['81ecf40b53dfd53f7a32a064b64a6932'] = {
  object: T.Optional(T.String()),
  data: T.Optional(T.Array(cache['cd24d00d9ee54e135ff0182095534b79']))
}
cache['d92acdff5d31a3449a699bd7b02eccd0'] = [
  T.Literal('validating'),
  T.Literal('failed'),
  T.Literal('in_progress'),
  T.Literal('finalizing'),
  T.Literal('completed'),
  T.Literal('expired'),
  T.Literal('cancelling'),
  T.Literal('cancelled')
]
cache['d169ced30659fecdbc2d014b7cc3f527'] = {
  total: T.Integer(),
  completed: T.Integer(),
  failed: T.Integer()
}
cache['fd4c666117c585b3f0057a20ad2d2eb7'] = {
  id: T.String(),
  object: T.Union(cache['82c296b1522d7c43a5f3acf37dee9ab9']),
  endpoint: T.String(),
  errors: T.Optional(T.Object(cache['81ecf40b53dfd53f7a32a064b64a6932'])),
  input_file_id: T.String(),
  completion_window: T.String(),
  status: T.Union(cache['d92acdff5d31a3449a699bd7b02eccd0']),
  output_file_id: T.Optional(T.String()),
  error_file_id: T.Optional(T.String()),
  created_at: T.Integer(),
  in_progress_at: T.Optional(T.Integer()),
  expires_at: T.Optional(T.Integer()),
  finalizing_at: T.Optional(T.Integer()),
  completed_at: T.Optional(T.Integer()),
  failed_at: T.Optional(T.Integer()),
  expired_at: T.Optional(T.Integer()),
  cancelling_at: T.Optional(T.Integer()),
  cancelled_at: T.Optional(T.Integer()),
  request_counts: T.Optional(
    T.Object(cache['d169ced30659fecdbc2d014b7cc3f527'])
  ),
  metadata: T.Optional(T.Object({}))
}
cache['03dea8f6c5546b269d815b0685f22fc2'] = T.Optional(
  T.String({ 'x-in': 'query' })
)
cache['42149f01eabed9777658c18b7af0f013'] = {
  after: cache['03dea8f6c5546b269d815b0685f22fc2'],
  limit: cache['f623a9bcd22b23749f54a4c743f14723']
}
cache['4e68c128552525324d51096b5bb9f7a0'] = T.Object(
  cache['fd4c666117c585b3f0057a20ad2d2eb7']
)
cache['e76a3aeddcfcbc86b8cc209163cac0e0'] = {
  data: T.Array(cache['4e68c128552525324d51096b5bb9f7a0']),
  first_id: T.Optional(T.String()),
  last_id: T.Optional(T.String()),
  has_more: T.Boolean(),
  object: T.Union(cache['5f46a9600fba15d8b3f7142887fe8a93'])
}
cache['b5c8cc4b92b86ba5d7dda414e29f6a77'] = T.String({ 'x-in': 'path' })
cache['98a516d4a5d3ab2209b07207210f3e27'] = {
  batch_id: cache['b5c8cc4b92b86ba5d7dda414e29f6a77']
}
cache['f5fb255641d20e003c628633ab3889cd'] = T.String({ 'x-in': 'path' })
cache['9742c95ee2abb542c28a4b5930635248'] = {
  batch_id: cache['f5fb255641d20e003c628633ab3889cd']
}
cache['ab1d6b5dfdbaadf9a17ec394b68df07b'] = {
  code: T.String(),
  message: T.String(),
  param: T.String(),
  type: T.String()
}
cache['1cb9916667a80bc36e1d5ce7545abfab'] = {
  error: T.Object(cache['ab1d6b5dfdbaadf9a17ec394b68df07b'])
}
cache['b3d84f48448a73495935cdfe19532308'] = [T.Literal(0), T.Literal(1)]
cache['845cb15f3132c9f9777f181e464d381a'] = {
  weight: T.Optional(T.Union(cache['b3d84f48448a73495935cdfe19532308']))
}
cache['52ce0e478a37e2607bad51d33f1423a5'] = [
  T.Object(cache['845cb15f3132c9f9777f181e464d381a']),
  T.Object(cache['209b2c57d56a0f28263eb42ae0ee8744'])
]
cache['b884ce8aa17c1c5141473acdb1984ccf'] = {
  name: T.Optional(T.String()),
  arguments: T.Optional(T.String())
}
cache['183cada67ebb813c671460d3f81035e7'] = {
  index: T.Integer(),
  id: T.Optional(T.String()),
  type: T.Optional(T.Union(cache['78a70c640dc014fc048915402571c97d'])),
  function: T.Optional(T.Object(cache['b884ce8aa17c1c5141473acdb1984ccf']))
}
cache['a3edd7eb6af65b9b3342569390f07650'] = [
  T.Literal('system'),
  T.Literal('user'),
  T.Literal('assistant'),
  T.Literal('tool'),
  T.Literal('function')
]
cache['fb9e0b55f1f02033592cb82f24b922eb'] = {
  arguments: T.Optional(T.String()),
  name: T.Optional(T.String())
}
cache['5884dbd52e02e2485844d9a38e9d7b62'] = T.Object(
  cache['183cada67ebb813c671460d3f81035e7']
)
cache['263c11f3840d0ca795fc30f9f1445471'] = [
  T.Literal('system'),
  T.Literal('user'),
  T.Literal('assistant'),
  T.Literal('tool')
]
cache['295e059c1295854543a1b718fedc01f4'] = {
  content: T.Optional(T.String()),
  function_call: T.Optional(
    T.Object(cache['fb9e0b55f1f02033592cb82f24b922eb'])
  ),
  tool_calls: T.Optional(T.Array(cache['5884dbd52e02e2485844d9a38e9d7b62'])),
  role: T.Optional(T.Union(cache['263c11f3840d0ca795fc30f9f1445471']))
}
cache['8132156de7bb8327008ac6c1d57fe20f'] = [
  T.Literal('stop'),
  T.Literal('length'),
  T.Literal('function_call'),
  T.Literal('content_filter')
]
cache['e31114baa7397c51f57be4f675f44739'] = {
  finish_reason: T.Union(cache['8132156de7bb8327008ac6c1d57fe20f']),
  index: T.Integer(),
  message: T.Object(cache['c69b0c46ff5553dbc0c5254e9e735ca5'])
}
cache['dbfdb6d4dae87ee6ae9e28ccd84b803a'] = T.Object(
  cache['e31114baa7397c51f57be4f675f44739']
)
cache['6302c061cd828bcc8af26231e0a6023d'] = {
  id: T.String(),
  choices: T.Array(cache['dbfdb6d4dae87ee6ae9e28ccd84b803a']),
  created: T.Integer(),
  model: T.String(),
  system_fingerprint: T.Optional(T.String()),
  object: T.Union(cache['6d34b7b60d069faa302d136f5f9af1e5']),
  usage: T.Optional(T.Object(cache['26b974e6ea7bd3e6b1a26b3f0b24db14']))
}
cache['100a17a68129062b5ae179bce66a8121'] = {
  delta: T.Object(cache['295e059c1295854543a1b718fedc01f4']),
  logprobs: T.Optional(T.Object(cache['17d3e5e8d5448d06d73754b3715983b8'])),
  finish_reason: T.Union(cache['80f632106afbb77a2a122509e0f8a574']),
  index: T.Integer()
}
cache['536b36a33c9d50bfd6665e10650d3720'] = T.Object(
  cache['100a17a68129062b5ae179bce66a8121']
)
cache['38f79ecd5ffc528eb44ce3feca577bdd'] = [T.Literal('chat.completion.chunk')]
cache['858ab29c2873cd9af7d9e26e0a387d74'] = {
  id: T.String(),
  choices: T.Array(cache['536b36a33c9d50bfd6665e10650d3720']),
  created: T.Integer(),
  model: T.String(),
  service_tier: T.Optional(T.Union(cache['197d31a87efdf23d5275a95185387ba2'])),
  system_fingerprint: T.Optional(T.String()),
  object: T.Union(cache['38f79ecd5ffc528eb44ce3feca577bdd']),
  usage: T.Optional(T.Object(cache['26b974e6ea7bd3e6b1a26b3f0b24db14']))
}
cache['87aa4d17c0bedcf229f6892e931cbbd0'] = [
  T.Object(cache['92698f76445604b7a0396447b24f1d64']),
  T.Object(cache['31cb56a0f6c96ff049590c7a7e0e4f93']),
  T.Intersect(cache['52ce0e478a37e2607bad51d33f1423a5'], {
    required: ['role']
  }),
  T.Object(cache['5be546f119a7ef874b54d6c255894974']),
  T.Object(cache['535476e8458c1c85126986c7953ac5ed'])
]
cache['24cfb54c7bbe9d24eb9366e1e75bce02'] = UnionOneOf(
  cache['87aa4d17c0bedcf229f6892e931cbbd0']
)
cache['8c78e8d83bc8758678f4f68b6355ea51'] = {
  messages: T.Optional(
    T.Array(cache['24cfb54c7bbe9d24eb9366e1e75bce02'], { minItems: 1 })
  ),
  tools: T.Optional(T.Array(cache['69c83e993b83a184c6641fcad3e2fa79'])),
  parallel_tool_calls: T.Optional(T.Boolean({ default: true })),
  functions: T.Optional(
    T.Array(cache['ab96fa8a32fc1d3f3c8ebfa94ced647b'], {
      minItems: 1,
      maxItems: 128
    })
  )
}
cache['dd2f2ceaeeb00ce3974684abd1d00df3'] = {
  prompt: T.Optional(T.String()),
  completion: T.Optional(T.String())
}
cache['c70fe7e4b04e6ddf554678ede7e83bc3'] = [T.Object({}), T.Object({})]
cache['e74b50a6872449007d0f65a06d538a5b'] = {
  code_interpreter: T.Optional(
    T.Object(cache['dd13372e4cad0d92178b435a3c9ab80a'])
  ),
  file_search: T.Optional(
    UnionOneOf(cache['c70fe7e4b04e6ddf554678ede7e83bc3'], {
      properties: {
        vector_store_ids: {
          type: 'array',
          description:
            'The [vector store](/docs/api-reference/vector-stores/object) attached to this assistant. There can be a maximum of 1 vector store attached to the assistant.\n',
          maxItems: 1,
          items: { type: 'string' }
        },
        vector_stores: {
          type: 'array',
          description:
            'A helper to create a [vector store](/docs/api-reference/vector-stores/object) with file_ids and attach it to this assistant. There can be a maximum of 1 vector store attached to the assistant.\n',
          maxItems: 1,
          items: {
            type: 'object',
            properties: {
              file_ids: {
                type: 'array',
                description:
                  'A list of [file](/docs/api-reference/files) IDs to add to the vector store. There can be a maximum of 10000 files in a vector store.\n',
                maxItems: 10000,
                items: { type: 'string' }
              },
              chunking_strategy: {
                type: 'object',
                description:
                  'The chunking strategy used to chunk the file(s). If not set, will use the `auto` strategy.',
                oneOf: [
                  {
                    type: 'object',
                    title: 'Auto Chunking Strategy',
                    description:
                      'The default strategy. This strategy currently uses a `max_chunk_size_tokens` of `800` and `chunk_overlap_tokens` of `400`.',
                    additionalProperties: false,
                    properties: {
                      type: {
                        type: 'string',
                        description: 'Always `auto`.',
                        enum: ['auto']
                      }
                    },
                    required: ['type']
                  },
                  {
                    type: 'object',
                    title: 'Static Chunking Strategy',
                    additionalProperties: false,
                    properties: {
                      type: {
                        type: 'string',
                        description: 'Always `static`.',
                        enum: ['static']
                      },
                      static: {
                        type: 'object',
                        additionalProperties: false,
                        properties: {
                          max_chunk_size_tokens: {
                            type: 'integer',
                            minimum: 100,
                            maximum: 4096,
                            description:
                              'The maximum number of tokens in each chunk. The default value is `800`. The minimum value is `100` and the maximum value is `4096`.'
                          },
                          chunk_overlap_tokens: {
                            type: 'integer',
                            description:
                              'The number of tokens that overlap between chunks. The default value is `400`.\n\nNote that the overlap must not exceed half of `max_chunk_size_tokens`.\n'
                          }
                        },
                        required: [
                          'max_chunk_size_tokens',
                          'chunk_overlap_tokens'
                        ]
                      }
                    },
                    required: ['type', 'static']
                  }
                ],
                'x-oaiExpandable': true
              },
              metadata: {
                type: 'object',
                description:
                  'Set of 16 key-value pairs that can be attached to a vector store. This can be useful for storing additional information about the vector store in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.\n',
                'x-oaiTypeLabel': 'map'
              }
            }
          }
        }
      }
    })
  )
}
cache['aef2e10d4274e67fe1230a83891b5cc8'] = {
  model: T.Union(cache['885cb050b3b9ed2b0e21615861668056']),
  name: T.Optional(T.String({ maxLength: 256 })),
  description: T.Optional(T.String({ maxLength: 512 })),
  instructions: T.Optional(T.String({ maxLength: 256000 })),
  tools: T.Optional(
    T.Array(cache['1a940c74617f188b00495cc5646b35c3'], {
      default: [],
      maxItems: 128
    })
  ),
  tool_resources: T.Optional(
    T.Object(cache['e74b50a6872449007d0f65a06d538a5b'])
  ),
  metadata: T.Optional(T.Object({})),
  temperature: T.Optional(T.Number({ minimum: 0, maximum: 2, default: 1 })),
  top_p: T.Optional(T.Number({ minimum: 0, maximum: 1, default: 1 })),
  response_format: T.Optional(
    UnionOneOf(cache['1685f604549943aeffead7cd3c3ceb39'])
  )
}
cache['40440b734481584a468c8335c6acdadb'] = T.Object(
  cache['843eeaceedb08259af683687a0aa2bdf']
)
cache['48c6b645f5107275bc015bcd2114b1ae'] = {
  object: T.String(),
  data: T.Array(cache['40440b734481584a468c8335c6acdadb']),
  first_id: T.String(),
  last_id: T.String(),
  has_more: T.Boolean()
}
cache['642a6c44b21705d7474aeba76da121fc'] = [T.Literal('thread.message.delta')]
cache['50cbad2c0dfa1004b35701a2b347bcc3'] = {
  file_id: T.Optional(T.String()),
  detail: T.Optional(
    T.Union(cache['b6e923bf33eb0750767826c1d9964735'], { default: 'auto' })
  )
}
cache['dd7e756c08a427be9b6c8e981b6f21f3'] = {
  index: T.Integer(),
  type: T.Union(cache['8df0c81d3ca064c9306f9021ceb3c8e0']),
  image_file: T.Optional(T.Object(cache['50cbad2c0dfa1004b35701a2b347bcc3']))
}
cache['1c48d99c0a4a1a263051ab97d52eb782'] = {
  file_id: T.Optional(T.String()),
  quote: T.Optional(T.String())
}
cache['0d6193811156f8b80dd1da6cc1333c6d'] = {
  index: T.Integer(),
  type: T.Union(cache['2f6e6687d4a7b009489f47f846edb873']),
  text: T.Optional(T.String()),
  file_citation: T.Optional(
    T.Object(cache['1c48d99c0a4a1a263051ab97d52eb782'])
  ),
  start_index: T.Optional(T.Integer({ minimum: 0 })),
  end_index: T.Optional(T.Integer({ minimum: 0 }))
}
cache['37af01bc420d4903097374bde4902232'] = {
  file_id: T.Optional(T.String())
}
cache['5996d6360d41a346ed65bff1ad934c12'] = {
  index: T.Integer(),
  type: T.Union(cache['4584091a0faf66f9266c50d0181f406e']),
  text: T.Optional(T.String()),
  file_path: T.Optional(T.Object(cache['37af01bc420d4903097374bde4902232'])),
  start_index: T.Optional(T.Integer({ minimum: 0 })),
  end_index: T.Optional(T.Integer({ minimum: 0 }))
}
cache['9f6c131ed4571bc8b271d1d9a2fbc45d'] = [
  T.Object(cache['0d6193811156f8b80dd1da6cc1333c6d']),
  T.Object(cache['5996d6360d41a346ed65bff1ad934c12'])
]
cache['4c2225e32aff9ad377bc554bb8395659'] = UnionOneOf(
  cache['9f6c131ed4571bc8b271d1d9a2fbc45d']
)
cache['a75886ebc7f37b47aa2d7d4c1fbf0c16'] = {
  value: T.Optional(T.String()),
  annotations: T.Optional(T.Array(cache['4c2225e32aff9ad377bc554bb8395659']))
}
cache['68a741d3ab394ef49caa56ef9c82e38f'] = {
  index: T.Integer(),
  type: T.Union(cache['c42dc14ef7b27cca8ac3b833a00c7de8']),
  text: T.Optional(T.Object(cache['a75886ebc7f37b47aa2d7d4c1fbf0c16']))
}
cache['48a01a42814b90f2a5defdd56618b9a6'] = {
  url: T.Optional(T.String()),
  detail: T.Optional(
    T.Union(cache['b6e923bf33eb0750767826c1d9964735'], { default: 'auto' })
  )
}
cache['68a79dee45eaed0dd6ee52bf9dbfb3fe'] = {
  index: T.Integer(),
  type: T.Union(cache['e1d87ce7f2ba3e461f4b247c81666007']),
  image_url: T.Optional(T.Object(cache['48a01a42814b90f2a5defdd56618b9a6']))
}
cache['8b13d35625d8b1ab50d4623ed1a33095'] = [
  T.Object(cache['dd7e756c08a427be9b6c8e981b6f21f3']),
  T.Object(cache['68a741d3ab394ef49caa56ef9c82e38f']),
  T.Object(cache['68a79dee45eaed0dd6ee52bf9dbfb3fe'])
]
cache['fc41dc638547d233500551b618f6cf9f'] = UnionOneOf(
  cache['8b13d35625d8b1ab50d4623ed1a33095']
)
cache['0128cb0bfb393ee807c99869a35f813b'] = {
  role: T.Optional(T.Union(cache['ce7338e23aeb865b84c76f56c481b024'])),
  content: T.Optional(T.Array(cache['fc41dc638547d233500551b618f6cf9f']))
}
cache['bd3753ba84267f249a84f4ad186a25d6'] = {
  id: T.String(),
  object: T.Union(cache['642a6c44b21705d7474aeba76da121fc']),
  delta: T.Object(cache['0128cb0bfb393ee807c99869a35f813b'])
}
cache['401d8a91954d3dda41bf4fa780fa8f41'] = [T.Literal('thread.run.step.delta')]
cache['29f9d17dafbb944c6bbec104fe6b1ba4'] = {
  message_id: T.Optional(T.String())
}
cache['a740499823065c2d5fe19d94d9d29016'] = {
  type: T.Union(cache['b20564ad044bd9504bd100e6cab1b7d6']),
  message_creation: T.Optional(
    T.Object(cache['29f9d17dafbb944c6bbec104fe6b1ba4'])
  )
}
cache['859c500bbee11e8939ff5cd2cb221489'] = {
  index: T.Integer(),
  type: T.Union(cache['784ff3ff024857449af0bbed9b0edefe']),
  logs: T.Optional(T.String())
}
cache['09821ac9122d28023efcc2e130b9ad7b'] = {
  file_id: T.Optional(T.String())
}
cache['8931e2f6296928a3271a232a025fe035'] = {
  index: T.Integer(),
  type: T.Union(cache['9dd10c71f1b76291165a18f47086a7c1']),
  image: T.Optional(T.Object(cache['09821ac9122d28023efcc2e130b9ad7b']))
}
cache['c68052664f04e76724e22900e73aef9d'] = [
  T.Object(cache['859c500bbee11e8939ff5cd2cb221489']),
  T.Object(cache['8931e2f6296928a3271a232a025fe035'])
]
cache['14c2341711858bb7a6cb0d8004c993c5'] = UnionOneOf(
  cache['c68052664f04e76724e22900e73aef9d']
)
cache['273971d0eef67ec38fe88334b3c73468'] = {
  input: T.Optional(T.String()),
  outputs: T.Optional(T.Array(cache['14c2341711858bb7a6cb0d8004c993c5']))
}
cache['90fb45ee9d24e812f2bce870f6437f19'] = {
  index: T.Integer(),
  id: T.Optional(T.String()),
  type: T.Union(cache['2d4711c91803ab303abfd256fdb1170f']),
  code_interpreter: T.Optional(
    T.Object(cache['273971d0eef67ec38fe88334b3c73468'])
  )
}
cache['d763f7e67bae401d784edd02e5d7f1d5'] = {
  index: T.Integer(),
  id: T.Optional(T.String()),
  type: T.Union(cache['3452c54e2704cafa4fe01757eef52cc2']),
  file_search: T.Object({})
}
cache['6b5f4d414b738a1bd7db268a7fe7070f'] = {
  name: T.Optional(T.String()),
  arguments: T.Optional(T.String()),
  output: T.Optional(T.String())
}
cache['527f17af52d8fe7a26829282496400c5'] = {
  index: T.Integer(),
  id: T.Optional(T.String()),
  type: T.Union(cache['78a70c640dc014fc048915402571c97d']),
  function: T.Optional(T.Object(cache['6b5f4d414b738a1bd7db268a7fe7070f']))
}
cache['81a57c864ea498c5967127486e8f6827'] = [
  T.Object(cache['90fb45ee9d24e812f2bce870f6437f19']),
  T.Object(cache['d763f7e67bae401d784edd02e5d7f1d5']),
  T.Object(cache['527f17af52d8fe7a26829282496400c5'])
]
cache['76e7933c1544bbb6b2e39f3e49e22903'] = UnionOneOf(
  cache['81a57c864ea498c5967127486e8f6827']
)
cache['d91c599917ea16662d0bc6ae28e39c69'] = {
  type: T.Union(cache['29d983b1b08e777df7766537f30bbc8b']),
  tool_calls: T.Optional(T.Array(cache['76e7933c1544bbb6b2e39f3e49e22903']))
}
cache['300cd71561c9099f4a1b5e8527f3b8be'] = [
  T.Object(cache['a740499823065c2d5fe19d94d9d29016']),
  T.Object(cache['d91c599917ea16662d0bc6ae28e39c69'])
]
cache['8deb50e71928cfc58d6543c2b6616ec0'] = {
  step_details: T.Optional(
    UnionOneOf(cache['300cd71561c9099f4a1b5e8527f3b8be'])
  )
}
cache['4a8085256bc70defb23fb255e39169b1'] = {
  id: T.String(),
  object: T.Union(cache['401d8a91954d3dda41bf4fa780fa8f41']),
  delta: T.Object(cache['8deb50e71928cfc58d6543c2b6616ec0'])
}
cache['3a8790a95304624e4cfe46a508ef9e57'] = [T.Literal('thread.created')]
cache['c07e5d9248cf8c6621b1e12635f43c25'] = {
  event: T.Union(cache['3a8790a95304624e4cfe46a508ef9e57']),
  data: T.Object(cache['843eeaceedb08259af683687a0aa2bdf'])
}
cache['b2b9513992ce25186fe9e6ef88c1245a'] = [
  T.Object(cache['c07e5d9248cf8c6621b1e12635f43c25'])
]
cache['970d93861417add4041b92af02be560e'] = [T.Literal('thread.run.created')]
cache['9c5fa8cf00b1b89b8e3ecea29c9cbe30'] = {
  event: T.Union(cache['970d93861417add4041b92af02be560e']),
  data: T.Object(cache['ca4149ebb610524f2504d5efcb933037'])
}
cache['5115beec7c847407059017e5af20b313'] = [T.Literal('thread.run.queued')]
cache['0a97256cdaaf8e8a11330d3c3aa823f2'] = {
  event: T.Union(cache['5115beec7c847407059017e5af20b313']),
  data: T.Object(cache['ca4149ebb610524f2504d5efcb933037'])
}
cache['85c9868b50b4bcfb5d21360b5ecfce54'] = [
  T.Literal('thread.run.in_progress')
]
cache['42c7d52c45036ccee481adc9b95300a3'] = {
  event: T.Union(cache['85c9868b50b4bcfb5d21360b5ecfce54']),
  data: T.Object(cache['ca4149ebb610524f2504d5efcb933037'])
}
cache['76b8a1c752f64abc6a895b9c88e698ec'] = [
  T.Literal('thread.run.requires_action')
]
cache['9a30f3e1cb61897c9e1de97cc51fb66f'] = {
  event: T.Union(cache['76b8a1c752f64abc6a895b9c88e698ec']),
  data: T.Object(cache['ca4149ebb610524f2504d5efcb933037'])
}
cache['6895f3516ec9abfd6fd3f733fc87d4de'] = [T.Literal('thread.run.completed')]
cache['13e9ad604a6b128de67cf9bc5dae3234'] = {
  event: T.Union(cache['6895f3516ec9abfd6fd3f733fc87d4de']),
  data: T.Object(cache['ca4149ebb610524f2504d5efcb933037'])
}
cache['70498ab51aeefc6cc7fed093ff9b15a1'] = [T.Literal('thread.run.incomplete')]
cache['b27ec78b65da084c60a27d2ef2c05f90'] = {
  event: T.Union(cache['70498ab51aeefc6cc7fed093ff9b15a1']),
  data: T.Object(cache['ca4149ebb610524f2504d5efcb933037'])
}
cache['f334ebf59c4f62a41f623d560885b7b7'] = [T.Literal('thread.run.failed')]
cache['9321552d1baf8cff74aca328d521ba2d'] = {
  event: T.Union(cache['f334ebf59c4f62a41f623d560885b7b7']),
  data: T.Object(cache['ca4149ebb610524f2504d5efcb933037'])
}
cache['e301cabd8817599276147579b171bd3c'] = [T.Literal('thread.run.cancelling')]
cache['aca2a228ba028f2b435bb106159400eb'] = {
  event: T.Union(cache['e301cabd8817599276147579b171bd3c']),
  data: T.Object(cache['ca4149ebb610524f2504d5efcb933037'])
}
cache['4a1ff37c4c4bda9ec90fd80405191729'] = [T.Literal('thread.run.cancelled')]
cache['c0f7959f6909bf24658380907aaf23d8'] = {
  event: T.Union(cache['4a1ff37c4c4bda9ec90fd80405191729']),
  data: T.Object(cache['ca4149ebb610524f2504d5efcb933037'])
}
cache['c3c4cc9a50d7f0a691b4d947354333ad'] = [T.Literal('thread.run.expired')]
cache['0c89d5974c98df4771060ad04ebef43d'] = {
  event: T.Union(cache['c3c4cc9a50d7f0a691b4d947354333ad']),
  data: T.Object(cache['ca4149ebb610524f2504d5efcb933037'])
}
cache['a9edd54879d8c269b2113b1e2a3bfd8c'] = [
  T.Object(cache['9c5fa8cf00b1b89b8e3ecea29c9cbe30']),
  T.Object(cache['0a97256cdaaf8e8a11330d3c3aa823f2']),
  T.Object(cache['42c7d52c45036ccee481adc9b95300a3']),
  T.Object(cache['9a30f3e1cb61897c9e1de97cc51fb66f']),
  T.Object(cache['13e9ad604a6b128de67cf9bc5dae3234']),
  T.Object(cache['b27ec78b65da084c60a27d2ef2c05f90']),
  T.Object(cache['9321552d1baf8cff74aca328d521ba2d']),
  T.Object(cache['aca2a228ba028f2b435bb106159400eb']),
  T.Object(cache['c0f7959f6909bf24658380907aaf23d8']),
  T.Object(cache['0c89d5974c98df4771060ad04ebef43d'])
]
cache['a342731b48bcdc6ba8a2acec8903ed03'] = [
  T.Literal('thread.run.step.created')
]
cache['f98ccfb90a59afe35ea5fa72e18366b8'] = {
  event: T.Union(cache['a342731b48bcdc6ba8a2acec8903ed03']),
  data: T.Object(cache['854aaaa64b1e916bcd12f8e453be1319'])
}
cache['1d016a8a519114676e8b636105f18b66'] = [
  T.Literal('thread.run.step.in_progress')
]
cache['b40d343ac29f0bfebf42e58048a9b85d'] = {
  event: T.Union(cache['1d016a8a519114676e8b636105f18b66']),
  data: T.Object(cache['854aaaa64b1e916bcd12f8e453be1319'])
}
cache['6e30d7d192d1b83bc81256ea2b98a7b9'] = {
  event: T.Union(cache['401d8a91954d3dda41bf4fa780fa8f41']),
  data: T.Object(cache['4a8085256bc70defb23fb255e39169b1'])
}
cache['529013b1e0ab83de5d3fe07fb14e8c13'] = [
  T.Literal('thread.run.step.completed')
]
cache['11da57e805ac1870556f7afb7320b417'] = {
  event: T.Union(cache['529013b1e0ab83de5d3fe07fb14e8c13']),
  data: T.Object(cache['854aaaa64b1e916bcd12f8e453be1319'])
}
cache['6bd266dc2aba3927187c66c425b5ce15'] = [
  T.Literal('thread.run.step.failed')
]
cache['8be9bed7c3315850f89f60b813b66bf4'] = {
  event: T.Union(cache['6bd266dc2aba3927187c66c425b5ce15']),
  data: T.Object(cache['854aaaa64b1e916bcd12f8e453be1319'])
}
cache['296f3cf1de0b29201dcd8f6532615065'] = [
  T.Literal('thread.run.step.cancelled')
]
cache['c0b85191a3e2faf6c8e7786dee041a1e'] = {
  event: T.Union(cache['296f3cf1de0b29201dcd8f6532615065']),
  data: T.Object(cache['854aaaa64b1e916bcd12f8e453be1319'])
}
cache['be00fc1b6275e67919f59af48df2c0dd'] = [
  T.Literal('thread.run.step.expired')
]
cache['35a83e4c20733b6a767b526cb8904710'] = {
  event: T.Union(cache['be00fc1b6275e67919f59af48df2c0dd']),
  data: T.Object(cache['854aaaa64b1e916bcd12f8e453be1319'])
}
cache['420a6fd74345af50b9e1a41e18ae96af'] = [
  T.Object(cache['f98ccfb90a59afe35ea5fa72e18366b8']),
  T.Object(cache['b40d343ac29f0bfebf42e58048a9b85d']),
  T.Object(cache['6e30d7d192d1b83bc81256ea2b98a7b9']),
  T.Object(cache['11da57e805ac1870556f7afb7320b417']),
  T.Object(cache['8be9bed7c3315850f89f60b813b66bf4']),
  T.Object(cache['c0b85191a3e2faf6c8e7786dee041a1e']),
  T.Object(cache['35a83e4c20733b6a767b526cb8904710'])
]
cache['de7edc0c951e51535a7a9b3669a02e81'] = [
  T.Literal('thread.message.created')
]
cache['403a3e650556362e8c98821fd0bd9ec9'] = {
  event: T.Union(cache['de7edc0c951e51535a7a9b3669a02e81']),
  data: T.Object(cache['9919ce439b06e6cb45eba3bc75cbb9a6'])
}
cache['3a1496cf69ed8a52bcc9571eb8eb422d'] = [
  T.Literal('thread.message.in_progress')
]
cache['083e96b7e43bfd486a37b473164cc34e'] = {
  event: T.Union(cache['3a1496cf69ed8a52bcc9571eb8eb422d']),
  data: T.Object(cache['9919ce439b06e6cb45eba3bc75cbb9a6'])
}
cache['8ab4b202aba42715ee1da3b481ddba17'] = {
  event: T.Union(cache['642a6c44b21705d7474aeba76da121fc']),
  data: T.Object(cache['bd3753ba84267f249a84f4ad186a25d6'])
}
cache['85afce3010b257ed56158f7fa977f3f7'] = [
  T.Literal('thread.message.completed')
]
cache['11268418301e01c1762c672d19b59c69'] = {
  event: T.Union(cache['85afce3010b257ed56158f7fa977f3f7']),
  data: T.Object(cache['9919ce439b06e6cb45eba3bc75cbb9a6'])
}
cache['e519f04395bd1b02c0aa1972e2805177'] = [
  T.Literal('thread.message.incomplete')
]
cache['481f6d79dd4da3274389223e05c08d20'] = {
  event: T.Union(cache['e519f04395bd1b02c0aa1972e2805177']),
  data: T.Object(cache['9919ce439b06e6cb45eba3bc75cbb9a6'])
}
cache['d99417cd7d64bcf008767f1973a7d84c'] = [
  T.Object(cache['403a3e650556362e8c98821fd0bd9ec9']),
  T.Object(cache['083e96b7e43bfd486a37b473164cc34e']),
  T.Object(cache['8ab4b202aba42715ee1da3b481ddba17']),
  T.Object(cache['11268418301e01c1762c672d19b59c69']),
  T.Object(cache['481f6d79dd4da3274389223e05c08d20'])
]
cache['3f32fbcc9f0eca88dbd842608b4dfcf7'] = [T.Literal('error')]
cache['8dac0bc5f136e9037b8071c21579f9f7'] = {
  event: T.Union(cache['3f32fbcc9f0eca88dbd842608b4dfcf7']),
  data: T.Object(cache['ab1d6b5dfdbaadf9a17ec394b68df07b'])
}
cache['9faad0899cc60e569a106c46704a0fab'] = [T.Literal('done')]
cache['de4f75293b1bbafe78664caabf3a4d25'] = [T.Literal('[DONE]')]
cache['309e13e70aef96c338656e1ffd6106e1'] = {
  event: T.Union(cache['9faad0899cc60e569a106c46704a0fab']),
  data: T.Union(cache['de4f75293b1bbafe78664caabf3a4d25'])
}
cache['3a8d89b12b4a424eed3b84bcc33c5507'] = [
  UnionOneOf(cache['b2b9513992ce25186fe9e6ef88c1245a']),
  UnionOneOf(cache['a9edd54879d8c269b2113b1e2a3bfd8c']),
  UnionOneOf(cache['420a6fd74345af50b9e1a41e18ae96af']),
  UnionOneOf(cache['d99417cd7d64bcf008767f1973a7d84c']),
  T.Object(cache['8dac0bc5f136e9037b8071c21579f9f7']),
  T.Object(cache['309e13e70aef96c338656e1ffd6106e1'])
]
cache['5467f3eaf89ef5ec2614485e5ede6c3b'] = [T.Literal('POST')]
cache['a1a4e5ba50917aa2fc6f201c45ee9585'] = {
  custom_id: T.Optional(T.String()),
  method: T.Optional(T.Union(cache['5467f3eaf89ef5ec2614485e5ede6c3b'])),
  url: T.Optional(T.String())
}
cache['4c605f2eb40c3f3f60ab806feb638fcb'] = {
  status_code: T.Optional(T.Integer()),
  request_id: T.Optional(T.String()),
  body: T.Optional(T.Object({}))
}
cache['c43fab43aab287169915fe17fb2e1971'] = {
  code: T.Optional(T.String()),
  message: T.Optional(T.String())
}
cache['876c76c736c0c1e61fa06f9f1bf7cf36'] = {
  id: T.Optional(T.String()),
  custom_id: T.Optional(T.String()),
  response: T.Optional(T.Object(cache['4c605f2eb40c3f3f60ab806feb638fcb'])),
  error: T.Optional(T.Object(cache['c43fab43aab287169915fe17fb2e1971']))
}

const schema = {
  '/chat/completions': {
    POST: {
      args: T.Object({
        body: T.Object(cache['789d92c12365125b6a639c657ea34917'], {
          'x-content-type': 'application/json'
        })
      }),
      data: T.Object(cache['b4247ecaa0539243e803718b73c0ea20'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/completions': {
    POST: {
      args: T.Object({
        body: T.Object(cache['ab1eaa61a000e22a30970151a2dbdae3'], {
          'x-content-type': 'application/json'
        })
      }),
      data: T.Object(cache['9e6c4887192a2980da29dc808136228b'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/images/generations': {
    POST: {
      args: T.Object({
        body: T.Object(cache['378c1a1d01596ebee6b7df5e0e964c34'], {
          'x-content-type': 'application/json'
        })
      }),
      data: T.Object(cache['6a214a678d3d983724191d71f53d3882'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/images/edits': {
    POST: {
      args: T.Object({
        body: T.Object(cache['e8f2c6f7f880ca40d8d13f2c1b49b320'], {
          'x-content-type': 'multipart/form-data'
        })
      }),
      data: T.Object(cache['6a214a678d3d983724191d71f53d3882'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/images/variations': {
    POST: {
      args: T.Object({
        body: T.Object(cache['fb2088789c6c61b655eb04b8ce15611a'], {
          'x-content-type': 'multipart/form-data'
        })
      }),
      data: T.Object(cache['6a214a678d3d983724191d71f53d3882'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/embeddings': {
    POST: {
      args: T.Object({
        body: T.Object(cache['ccdf2e80da8a26530863685b9ab4c67f'], {
          'x-content-type': 'application/json',
          additionalProperties: false
        })
      }),
      data: T.Object(cache['341d2859131bfedcf2f42ec4742cbf17'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/audio/speech': {
    POST: {
      args: T.Object({
        body: T.Object(cache['0e5d01026ac12129c45911b934c108dc'], {
          'x-content-type': 'application/json',
          additionalProperties: false
        })
      }),
      data: T.String({
        'x-status-code': '200',
        'x-content-type': 'application/octet-stream',
        format: 'binary'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/audio/transcriptions': {
    POST: {
      args: T.Object({
        body: T.Object(cache['cd1a2b32e62b1991943ff6a10cfe92a0'], {
          'x-content-type': 'multipart/form-data',
          additionalProperties: false
        })
      }),
      data: UnionOneOf(cache['e4d3829e51fff2d2b3e8618a55a78f5d'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/audio/translations': {
    POST: {
      args: T.Object({
        body: T.Object(cache['ce56d7a02eda5fc5e1e6ae8f44b7df4d'], {
          'x-content-type': 'multipart/form-data',
          additionalProperties: false
        })
      }),
      data: UnionOneOf(cache['214752c4df0a61ddb5233e00d403722e'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/files': {
    GET: {
      args: T.Optional(
        T.Object({
          query: T.Optional(T.Object(cache['5d9fccb5a3f83bf58e7a31f78fa56600']))
        })
      ),
      data: T.Object(cache['69f3d06cf36beecb7106015b2019bf32'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    },
    POST: {
      args: T.Object({
        body: T.Object(cache['f1eaf98b29e72deca8f81354ebeefab6'], {
          'x-content-type': 'multipart/form-data',
          additionalProperties: false
        })
      }),
      data: T.Object(cache['b251863b7c08fef2022f1521498922e9'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/files/{file_id}': {
    DELETE: {
      args: T.Object({
        params: T.Object(cache['313598d7345ad28e456238f5691a68c8'])
      }),
      data: T.Object(cache['dbc502a1e44b3958fc05e41fc329da59'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    },
    GET: {
      args: T.Object({
        params: T.Object(cache['313598d7345ad28e456238f5691a68c8'])
      }),
      data: T.Object(cache['b251863b7c08fef2022f1521498922e9'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/files/{file_id}/content': {
    GET: {
      args: T.Object({
        params: T.Object(cache['313598d7345ad28e456238f5691a68c8'])
      }),
      data: T.String({
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/uploads': {
    POST: {
      args: T.Object({
        body: T.Object(cache['63d9466b04243ae34500477a25205563'], {
          'x-content-type': 'application/json',
          additionalProperties: false
        })
      }),
      data: T.Object(cache['3b836fb3a52aee8a6648db9e30836db5'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/uploads/{upload_id}/parts': {
    POST: {
      args: T.Object({
        params: T.Object(cache['498cc1453eb8ac1a69c74aa2abee6e25']),
        body: T.Object(cache['8fb04687877d6ff4d083f397e24371cb'], {
          'x-content-type': 'multipart/form-data',
          additionalProperties: false
        })
      }),
      data: T.Object(cache['82b9938da6f29f2a4cd7fdcc660e811d'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/uploads/{upload_id}/complete': {
    POST: {
      args: T.Object({
        params: T.Object(cache['498cc1453eb8ac1a69c74aa2abee6e25']),
        body: T.Object(cache['664528ed31bd165f0169bbcf2e28621a'], {
          'x-content-type': 'application/json',
          additionalProperties: false
        })
      }),
      data: T.Object(cache['3b836fb3a52aee8a6648db9e30836db5'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/uploads/{upload_id}/cancel': {
    POST: {
      args: T.Object({
        params: T.Object(cache['498cc1453eb8ac1a69c74aa2abee6e25'])
      }),
      data: T.Object(cache['3b836fb3a52aee8a6648db9e30836db5'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/fine_tuning/jobs': {
    POST: {
      args: T.Object({
        body: T.Object(cache['cf2647be9ed63bc5488a87cb0d563e61'], {
          'x-content-type': 'application/json'
        })
      }),
      data: T.Object(cache['f4831f54ade0faa46894bc4ab7d4ae34'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    },
    GET: {
      args: T.Optional(
        T.Object({
          query: T.Optional(T.Object(cache['58953d15fba8bb0f5cd2c53aa3671d3a']))
        })
      ),
      data: T.Object(cache['424ddce3d1697042396663ce3e79c1db'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/fine_tuning/jobs/{fine_tuning_job_id}': {
    GET: {
      args: T.Object({
        params: T.Object(cache['ef40b414cabe5d4a15d94b716cd9c2fc'])
      }),
      data: T.Object(cache['f4831f54ade0faa46894bc4ab7d4ae34'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/fine_tuning/jobs/{fine_tuning_job_id}/events': {
    GET: {
      args: T.Object({
        params: T.Object(cache['aed544d9d14acecd14e47c8658fe8b0c']),
        query: T.Optional(T.Object(cache['47c4bbca653892d1d09e97b759ad3e7c']))
      }),
      data: T.Object(cache['dc5e7404879b229d546a560a0ee7a760'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/fine_tuning/jobs/{fine_tuning_job_id}/cancel': {
    POST: {
      args: T.Object({
        params: T.Object(cache['b34d480db9bee03d5900078d6818a239'])
      }),
      data: T.Object(cache['f4831f54ade0faa46894bc4ab7d4ae34'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/fine_tuning/jobs/{fine_tuning_job_id}/checkpoints': {
    GET: {
      args: T.Object({
        params: T.Object(cache['f1f8bea1fa0038e1df2de20991ae76b4']),
        query: T.Optional(T.Object(cache['f4cfae83a3a8d31fd15057b5f6ec1cbc']))
      }),
      data: T.Object(cache['6400230492b2b2d36b76ab9c249e9a54'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/models': {
    GET: {
      args: T.Void(),
      data: T.Object(cache['de1770e98bcba00d335a758af486f2c0'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/models/{model}': {
    GET: {
      args: T.Object({
        params: T.Object(cache['ea5e0eb15decade39819bf8d1158e96c'])
      }),
      data: T.Object(cache['f985d5a3b7e93f0e5e42a79b59dd70b0'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    },
    DELETE: {
      args: T.Object({
        params: T.Object(cache['60a9ef36d1ebefc9c74cb7fbf067b274'])
      }),
      data: T.Object(cache['3acb79c99fce6f7610e051543d60a3e1'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/moderations': {
    POST: {
      args: T.Object({
        body: T.Object(cache['1e0461f5f1cdeb8cd7b5e3d707433c23'], {
          'x-content-type': 'application/json'
        })
      }),
      data: T.Object(cache['ca8dc0f3835cc7ceb7c69b0bcd79a64f'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/assistants': {
    GET: {
      args: T.Optional(
        T.Object({
          query: T.Optional(T.Object(cache['00ed673da5f8d0f8bdc2aec27c0d32f9']))
        })
      ),
      data: T.Object(cache['9081c315ba1338b89748aa0b6479391d'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    },
    POST: {
      args: T.Object({
        body: T.Object(cache['7520e1a7c95f8ccdef2c8eda02751aaa'], {
          'x-content-type': 'application/json',
          additionalProperties: false
        })
      }),
      data: T.Object(cache['7882b5109074218a773e2d39166a7be5'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/assistants/{assistant_id}': {
    GET: {
      args: T.Object({
        params: T.Object(cache['f5eef158e61c2b13755b4f05c38af46a'])
      }),
      data: T.Object(cache['7882b5109074218a773e2d39166a7be5'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    },
    POST: {
      args: T.Object({
        params: T.Object(cache['dd0e49988a038fbe96bb85ce7b811637']),
        body: T.Object(cache['95ecfc7eed16d50c8a786902f0c3fed8'], {
          'x-content-type': 'application/json',
          additionalProperties: false
        })
      }),
      data: T.Object(cache['7882b5109074218a773e2d39166a7be5'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    },
    DELETE: {
      args: T.Object({
        params: T.Object(cache['dd97105ffc02ac90d008a244359fe4ac'])
      }),
      data: T.Object(cache['83c5a807ac0ebfe253fb808ae9798153'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/threads': {
    POST: {
      args: T.Optional(
        T.Object({
          body: T.Optional(
            T.Object(cache['12819c881a5e74b6f58a9f0891043262'], {
              'x-content-type': 'application/json',
              additionalProperties: false
            })
          )
        })
      ),
      data: T.Object(cache['843eeaceedb08259af683687a0aa2bdf'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/threads/{thread_id}': {
    GET: {
      args: T.Object({
        params: T.Object(cache['2366494be21ce9b8eb9877111fdec21a'])
      }),
      data: T.Object(cache['843eeaceedb08259af683687a0aa2bdf'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    },
    POST: {
      args: T.Object({
        params: T.Object(cache['7273293413ffa9055c2481b1cd3d4642']),
        body: T.Object(cache['1c720356a35580bcf8e4b9b5a920ed57'], {
          'x-content-type': 'application/json',
          additionalProperties: false
        })
      }),
      data: T.Object(cache['843eeaceedb08259af683687a0aa2bdf'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    },
    DELETE: {
      args: T.Object({
        params: T.Object(cache['73c04a68437b0c946c43407635b42e71'])
      }),
      data: T.Object(cache['9939d1955732b534db457a6302c78878'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/threads/{thread_id}/messages': {
    GET: {
      args: T.Object({
        params: T.Object(cache['3611c4f70d67730538f1c94ff6f6cb93']),
        query: T.Optional(T.Object(cache['be683abc499e874ff4a72d3af0b7804b']))
      }),
      data: T.Object(cache['59d3dec5b533735db4e2f3a3e16561d7'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    },
    POST: {
      args: T.Object({
        params: T.Object(cache['41d908fb513fb358207880c572c1af3e']),
        body: T.Object(cache['dfc91097389707b177bd01c35e017eaa'], {
          'x-content-type': 'application/json',
          additionalProperties: false
        })
      }),
      data: T.Object(cache['9919ce439b06e6cb45eba3bc75cbb9a6'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/threads/{thread_id}/messages/{message_id}': {
    GET: {
      args: T.Object({
        params: T.Object(cache['d4d12030e061f44c9c55afbdf463eafd'])
      }),
      data: T.Object(cache['9919ce439b06e6cb45eba3bc75cbb9a6'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    },
    POST: {
      args: T.Object({
        params: T.Object(cache['fbca0ddc436612e084f356472689bcb2']),
        body: T.Object(cache['e72516203ab15db84c83493e3c34ce40'], {
          'x-content-type': 'application/json',
          additionalProperties: false
        })
      }),
      data: T.Object(cache['9919ce439b06e6cb45eba3bc75cbb9a6'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    },
    DELETE: {
      args: T.Object({
        params: T.Object(cache['117a5a0b2e983845bfea3395f50556a3'])
      }),
      data: T.Object(cache['9abc628d8039f81daf13b967df78ff44'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/threads/runs': {
    POST: {
      args: T.Object({
        body: T.Object(cache['2aa38b2cf412659a625c062134f34400'], {
          'x-content-type': 'application/json',
          additionalProperties: false
        })
      }),
      data: T.Object(cache['ca4149ebb610524f2504d5efcb933037'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/threads/{thread_id}/runs': {
    GET: {
      args: T.Object({
        params: T.Object(cache['a0ec30453187155d4ab35c046259e40e']),
        query: T.Optional(T.Object(cache['00ed673da5f8d0f8bdc2aec27c0d32f9']))
      }),
      data: T.Object(cache['a7527aec923b3c24c4a77e5b5b347ee3'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    },
    POST: {
      args: T.Object({
        params: T.Object(cache['51e260731530a59a0cb37faedb5f0a6f']),
        body: T.Object(cache['889c497d349b903ef8b7e66f1f7f1f78'], {
          'x-content-type': 'application/json',
          additionalProperties: false
        })
      }),
      data: T.Object(cache['ca4149ebb610524f2504d5efcb933037'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/threads/{thread_id}/runs/{run_id}': {
    GET: {
      args: T.Object({
        params: T.Object(cache['c4e7dad4927de29148261c74707a24be'])
      }),
      data: T.Object(cache['ca4149ebb610524f2504d5efcb933037'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    },
    POST: {
      args: T.Object({
        params: T.Object(cache['b088e7f74ac7e36a1e9ed8d96aa142e7']),
        body: T.Object(cache['e72516203ab15db84c83493e3c34ce40'], {
          'x-content-type': 'application/json',
          additionalProperties: false
        })
      }),
      data: T.Object(cache['ca4149ebb610524f2504d5efcb933037'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/threads/{thread_id}/runs/{run_id}/submit_tool_outputs': {
    POST: {
      args: T.Object({
        params: T.Object(cache['c6c4bc41389d1b97c63f61351e7e2e40']),
        body: T.Object(cache['2a39b62dc91107419a6b6b45a2fd3cde'], {
          'x-content-type': 'application/json',
          additionalProperties: false
        })
      }),
      data: T.Object(cache['ca4149ebb610524f2504d5efcb933037'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/threads/{thread_id}/runs/{run_id}/cancel': {
    POST: {
      args: T.Object({
        params: T.Object(cache['919a50c78f95a064b8ce8888e5a7feb8'])
      }),
      data: T.Object(cache['ca4149ebb610524f2504d5efcb933037'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/threads/{thread_id}/runs/{run_id}/steps': {
    GET: {
      args: T.Object({
        params: T.Object(cache['a98f3716ff05056e3907ed6dd04dd57d']),
        query: T.Optional(T.Object(cache['00ed673da5f8d0f8bdc2aec27c0d32f9']))
      }),
      data: T.Object(cache['e52dccee327d5a8f917ad2553f54a22a'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/threads/{thread_id}/runs/{run_id}/steps/{step_id}': {
    GET: {
      args: T.Object({
        params: T.Object(cache['29990e860512d3007a6d0821f2df00d8'])
      }),
      data: T.Object(cache['854aaaa64b1e916bcd12f8e453be1319'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/vector_stores': {
    GET: {
      args: T.Optional(
        T.Object({
          query: T.Optional(T.Object(cache['00ed673da5f8d0f8bdc2aec27c0d32f9']))
        })
      ),
      data: T.Object(cache['ff74fee0b40c9e2f94ce4aaa9f863cc9'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    },
    POST: {
      args: T.Object({
        body: T.Object(cache['bb490d308693e8cdd597c0ee42323db6'], {
          'x-content-type': 'application/json',
          additionalProperties: false
        })
      }),
      data: T.Object(cache['106f91aac5881e610e7179d48348abbb'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/vector_stores/{vector_store_id}': {
    GET: {
      args: T.Object({
        params: T.Object(cache['e4b1b7dd4b14d50e5bd0c9ddd5d33286'])
      }),
      data: T.Object(cache['106f91aac5881e610e7179d48348abbb'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    },
    POST: {
      args: T.Object({
        params: T.Object(cache['f65d5eea2ede29c9d262a74b9f49d055']),
        body: T.Object(cache['89224ea2a0ac9d6f9f0f50a60a5780dd'], {
          'x-content-type': 'application/json',
          additionalProperties: false
        })
      }),
      data: T.Object(cache['106f91aac5881e610e7179d48348abbb'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    },
    DELETE: {
      args: T.Object({
        params: T.Object(cache['8dd11ad92b9242f0285cf92d0b1c0286'])
      }),
      data: T.Object(cache['3cf239f84a4a43b6d81c8ef36c8b3c6c'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/vector_stores/{vector_store_id}/files': {
    GET: {
      args: T.Object({
        params: T.Object(cache['546de948e6308c89852c9c106d58d9d3']),
        query: T.Optional(T.Object(cache['cbe79cc9e800b0f7dedcc853786f0dda']))
      }),
      data: T.Object(cache['fe5638ea0024ceb6efb6cd1bb3123c9e'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    },
    POST: {
      args: T.Object({
        params: T.Object(cache['05e213dbdf2ba57e4f5cb6c66d23b9e6']),
        body: T.Object(cache['ea7e7440bc7428abf277aa8ee93183ae'], {
          'x-content-type': 'application/json',
          additionalProperties: false
        })
      }),
      data: T.Object(cache['4cfbe31ffd0b4e4eb1b22150bb0f2967'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/vector_stores/{vector_store_id}/files/{file_id}': {
    GET: {
      args: T.Object({
        params: T.Object(cache['9cbf3bf0882e6bb4e57e7af6642167f9'])
      }),
      data: T.Object(cache['4cfbe31ffd0b4e4eb1b22150bb0f2967'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    },
    DELETE: {
      args: T.Object({
        params: T.Object(cache['2b5166643e372af6b57c8654ca24f390'])
      }),
      data: T.Object(cache['6ea46d7ad422330b1c96d02366583a97'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/vector_stores/{vector_store_id}/file_batches': {
    POST: {
      args: T.Object({
        params: T.Object(cache['3ecd3793a6bef4c614966479c9b8fe2b']),
        body: T.Object(cache['cd92fc6b54146a71b64b6ef1f72c6e7f'], {
          'x-content-type': 'application/json',
          additionalProperties: false
        })
      }),
      data: T.Object(cache['faab15370c6ceb87be31157f86ef9c4d'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/vector_stores/{vector_store_id}/file_batches/{batch_id}': {
    GET: {
      args: T.Object({
        params: T.Object(cache['7382cf97dd9361e7496fe62a161eafe0'])
      }),
      data: T.Object(cache['faab15370c6ceb87be31157f86ef9c4d'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/vector_stores/{vector_store_id}/file_batches/{batch_id}/cancel': {
    POST: {
      args: T.Object({
        params: T.Object(cache['18dfbefad078b465ca74296519cb3530'])
      }),
      data: T.Object(cache['faab15370c6ceb87be31157f86ef9c4d'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/vector_stores/{vector_store_id}/file_batches/{batch_id}/files': {
    GET: {
      args: T.Object({
        params: T.Object(cache['4ec6fe4f9d647e7cd6bb799f76d53b87']),
        query: T.Optional(T.Object(cache['cbe79cc9e800b0f7dedcc853786f0dda']))
      }),
      data: T.Object(cache['fe5638ea0024ceb6efb6cd1bb3123c9e'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/batches': {
    POST: {
      args: T.Object({
        body: T.Object(cache['36d0e17dc9401aaf7fedb03cb865e3b0'], {
          'x-content-type': 'application/json'
        })
      }),
      data: T.Object(cache['fd4c666117c585b3f0057a20ad2d2eb7'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    },
    GET: {
      args: T.Optional(
        T.Object({
          query: T.Optional(T.Object(cache['42149f01eabed9777658c18b7af0f013']))
        })
      ),
      data: T.Object(cache['e76a3aeddcfcbc86b8cc209163cac0e0'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/batches/{batch_id}': {
    GET: {
      args: T.Object({
        params: T.Object(cache['98a516d4a5d3ab2209b07207210f3e27'])
      }),
      data: T.Object(cache['fd4c666117c585b3f0057a20ad2d2eb7'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/batches/{batch_id}/cancel': {
    POST: {
      args: T.Object({
        params: T.Object(cache['9742c95ee2abb542c28a4b5930635248'])
      }),
      data: T.Object(cache['fd4c666117c585b3f0057a20ad2d2eb7'], {
        'x-status-code': '200',
        'x-content-type': 'application/json'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  }
}

const _components = {
  schemas: {
    Error: T.Object(cache['ab1d6b5dfdbaadf9a17ec394b68df07b']),
    ErrorResponse: T.Object(cache['1cb9916667a80bc36e1d5ce7545abfab']),
    ListModelsResponse: T.Object(cache['de1770e98bcba00d335a758af486f2c0']),
    DeleteModelResponse: T.Object(cache['3acb79c99fce6f7610e051543d60a3e1']),
    CreateCompletionRequest: T.Object(
      cache['ab1eaa61a000e22a30970151a2dbdae3']
    ),
    CreateCompletionResponse: T.Object(
      cache['9e6c4887192a2980da29dc808136228b']
    ),
    ChatCompletionRequestMessageContentPart: UnionOneOf(
      cache['617a55cfe087936b04d7ca99d693cc0b']
    ),
    ChatCompletionRequestMessageContentPartImage: T.Object(
      cache['73e8204042ebb8e1ae7fcd4b97cb0b6a']
    ),
    ChatCompletionRequestMessageContentPartText: T.Object(
      cache['1d65ed0800bcbfa572f19b20e4e05d8c']
    ),
    ChatCompletionRequestMessage: UnionOneOf(
      cache['ebe89f20ff0e602b7b92dacd97a114cd']
    ),
    ChatCompletionRequestSystemMessage: T.Object(
      cache['92698f76445604b7a0396447b24f1d64']
    ),
    ChatCompletionRequestUserMessage: T.Object(
      cache['31cb56a0f6c96ff049590c7a7e0e4f93']
    ),
    ChatCompletionRequestAssistantMessage: T.Object(
      cache['209b2c57d56a0f28263eb42ae0ee8744']
    ),
    FineTuneChatCompletionRequestAssistantMessage: T.Intersect(
      cache['52ce0e478a37e2607bad51d33f1423a5'],
      { required: ['role'] }
    ),
    ChatCompletionRequestToolMessage: T.Object(
      cache['5be546f119a7ef874b54d6c255894974']
    ),
    ChatCompletionRequestFunctionMessage: T.Object(
      cache['535476e8458c1c85126986c7953ac5ed']
    ),
    FunctionParameters: T.Object(
      {},
      {
        additionalProperties: true
      }
    ),
    ChatCompletionFunctions: T.Object(
      cache['8a0e72bd020a90249508a3d6f36a7983']
    ),
    ChatCompletionFunctionCallOption: T.Object(
      cache['58244a1afb20970b3d9cbb13f1afbd6e']
    ),
    ChatCompletionTool: T.Object(cache['a3ce909949dc5ef8380a9acaeba1efc9']),
    FunctionObject: T.Object(cache['8a0e72bd020a90249508a3d6f36a7983']),
    ChatCompletionToolChoiceOption: UnionOneOf(
      cache['1685fb60796183a10fb0951ebda328f8']
    ),
    ChatCompletionNamedToolChoice: T.Object(
      cache['59511b612909655f97ba812e3284d0ab']
    ),
    ParallelToolCalls: T.Boolean({ default: true }),
    ChatCompletionMessageToolCalls: T.Array(
      cache['0834704c8cede1f92348ff754bdd80f6']
    ),
    ChatCompletionMessageToolCall: T.Object(
      cache['9856d7691d59a2ed419325465faf362a']
    ),
    ChatCompletionMessageToolCallChunk: T.Object(
      cache['183cada67ebb813c671460d3f81035e7']
    ),
    ChatCompletionRole: T.Union(cache['a3edd7eb6af65b9b3342569390f07650']),
    ChatCompletionStreamOptions: T.Object(
      cache['35aebd667abc35dedb7a3bb43497761e'],
      {
        default: null
      }
    ),
    ChatCompletionResponseMessage: T.Object(
      cache['c69b0c46ff5553dbc0c5254e9e735ca5']
    ),
    ChatCompletionStreamResponseDelta: T.Object(
      cache['295e059c1295854543a1b718fedc01f4']
    ),
    CreateChatCompletionRequest: T.Object(
      cache['789d92c12365125b6a639c657ea34917']
    ),
    CreateChatCompletionResponse: T.Object(
      cache['b4247ecaa0539243e803718b73c0ea20']
    ),
    CreateChatCompletionFunctionResponse: T.Object(
      cache['6302c061cd828bcc8af26231e0a6023d']
    ),
    ChatCompletionTokenLogprob: T.Object(
      cache['32aecf538dc34400550f8feaa639c90b']
    ),
    ListPaginatedFineTuningJobsResponse: T.Object(
      cache['424ddce3d1697042396663ce3e79c1db']
    ),
    CreateChatCompletionStreamResponse: T.Object(
      cache['858ab29c2873cd9af7d9e26e0a387d74']
    ),
    CreateChatCompletionImageResponse: T.Object({}),
    CreateImageRequest: T.Object(cache['378c1a1d01596ebee6b7df5e0e964c34']),
    ImagesResponse: T.Object(cache['6a214a678d3d983724191d71f53d3882']),
    Image: T.Object(cache['11a791cdcf68079c8dfbde956e16407a']),
    CreateImageEditRequest: T.Object(cache['e8f2c6f7f880ca40d8d13f2c1b49b320']),
    CreateImageVariationRequest: T.Object(
      cache['fb2088789c6c61b655eb04b8ce15611a']
    ),
    CreateModerationRequest: T.Object(
      cache['1e0461f5f1cdeb8cd7b5e3d707433c23']
    ),
    CreateModerationResponse: T.Object(
      cache['ca8dc0f3835cc7ceb7c69b0bcd79a64f']
    ),
    ListFilesResponse: T.Object(cache['69f3d06cf36beecb7106015b2019bf32']),
    CreateFileRequest: T.Object(cache['f1eaf98b29e72deca8f81354ebeefab6'], {
      additionalProperties: false
    }),
    DeleteFileResponse: T.Object(cache['dbc502a1e44b3958fc05e41fc329da59']),
    CreateUploadRequest: T.Object(cache['63d9466b04243ae34500477a25205563'], {
      additionalProperties: false
    }),
    AddUploadPartRequest: T.Object(cache['8fb04687877d6ff4d083f397e24371cb'], {
      additionalProperties: false
    }),
    CompleteUploadRequest: T.Object(cache['664528ed31bd165f0169bbcf2e28621a'], {
      additionalProperties: false
    }),
    CancelUploadRequest: T.Object(
      {},
      {
        additionalProperties: false
      }
    ),
    CreateFineTuningJobRequest: T.Object(
      cache['cf2647be9ed63bc5488a87cb0d563e61']
    ),
    ListFineTuningJobEventsResponse: T.Object(
      cache['dc5e7404879b229d546a560a0ee7a760']
    ),
    ListFineTuningJobCheckpointsResponse: T.Object(
      cache['6400230492b2b2d36b76ab9c249e9a54']
    ),
    CreateEmbeddingRequest: T.Object(
      cache['ccdf2e80da8a26530863685b9ab4c67f'],
      {
        additionalProperties: false
      }
    ),
    CreateEmbeddingResponse: T.Object(
      cache['341d2859131bfedcf2f42ec4742cbf17']
    ),
    CreateTranscriptionRequest: T.Object(
      cache['cd1a2b32e62b1991943ff6a10cfe92a0'],
      {
        additionalProperties: false
      }
    ),
    CreateTranscriptionResponseJson: T.Object(
      cache['6057c21d25418b1df74f7d1f40564832']
    ),
    TranscriptionSegment: T.Object(cache['9997baee46d5a11c20b29a44c2da1cdd']),
    TranscriptionWord: T.Object(cache['7d40fe46e77cf9210b9e49ff02cd11df']),
    CreateTranscriptionResponseVerboseJson: T.Object(
      cache['99336b435aaca4e9b904674efb05eef1']
    ),
    CreateTranslationRequest: T.Object(
      cache['ce56d7a02eda5fc5e1e6ae8f44b7df4d'],
      {
        additionalProperties: false
      }
    ),
    CreateTranslationResponseJson: T.Object(
      cache['b8b74809e88818c33b81e19060b02636']
    ),
    CreateTranslationResponseVerboseJson: T.Object(
      cache['e844cb0a671d7eb4e3d747c1620f1fb4']
    ),
    CreateSpeechRequest: T.Object(cache['0e5d01026ac12129c45911b934c108dc'], {
      additionalProperties: false
    }),
    Model: T.Object(cache['f985d5a3b7e93f0e5e42a79b59dd70b0']),
    OpenAIFile: T.Object(cache['b251863b7c08fef2022f1521498922e9']),
    Upload: T.Object(cache['3b836fb3a52aee8a6648db9e30836db5']),
    UploadPart: T.Object(cache['82b9938da6f29f2a4cd7fdcc660e811d']),
    Embedding: T.Object(cache['92a40676f0c5249d788d0e90b23dafbb']),
    FineTuningJob: T.Object(cache['f4831f54ade0faa46894bc4ab7d4ae34']),
    FineTuningIntegration: T.Object(cache['61ff1a654058a8a4ae59b13ff2adaddc']),
    FineTuningJobEvent: T.Object(cache['bd0d77a8375da70d1dfa3094714766c5']),
    FineTuningJobCheckpoint: T.Object(
      cache['9c2939363b31d0970ce00ec483070c0d']
    ),
    FinetuneChatRequestInput: T.Object(
      cache['8c78e8d83bc8758678f4f68b6355ea51']
    ),
    FinetuneCompletionRequestInput: T.Object(
      cache['dd2f2ceaeeb00ce3974684abd1d00df3']
    ),
    CompletionUsage: T.Object(cache['26b974e6ea7bd3e6b1a26b3f0b24db14']),
    RunCompletionUsage: T.Object(cache['da66f4ee7c397f4a92cad313900752ae']),
    RunStepCompletionUsage: T.Object(cache['22b945819fb99309d5bf225b5d31281b']),
    AssistantsApiResponseFormatOption: UnionOneOf(
      cache['1685f604549943aeffead7cd3c3ceb39']
    ),
    AssistantsApiResponseFormat: T.Object(
      cache['a78b3d57182ec82d9a9cc20e003f1569']
    ),
    AssistantObject: T.Object(cache['7882b5109074218a773e2d39166a7be5']),
    CreateAssistantRequest: T.Object(
      cache['aef2e10d4274e67fe1230a83891b5cc8'],
      {
        additionalProperties: false
      }
    ),
    ModifyAssistantRequest: T.Object(
      cache['95ecfc7eed16d50c8a786902f0c3fed8'],
      {
        additionalProperties: false
      }
    ),
    DeleteAssistantResponse: T.Object(
      cache['83c5a807ac0ebfe253fb808ae9798153']
    ),
    ListAssistantsResponse: T.Object(cache['9081c315ba1338b89748aa0b6479391d']),
    AssistantToolsCode: T.Object(cache['6ba7f0abfc044550413da560fa4e703c']),
    AssistantToolsFileSearch: T.Object(
      cache['d54cc671bec33fda68c9e56a26092c3b']
    ),
    AssistantToolsFileSearchTypeOnly: T.Object(
      cache['f56074624619b5dae66c88acf4bc359b']
    ),
    AssistantToolsFunction: T.Object(cache['144a45ac135d53cd2172c86dcbee741a']),
    TruncationObject: T.Object(cache['b6d4dbea7badacde9ce3f7c625314a5e']),
    AssistantsApiToolChoiceOption: UnionOneOf(
      cache['d1537d93df4305d126d6a2834fd25f2c']
    ),
    AssistantsNamedToolChoice: T.Object(
      cache['952d397f2e2cc6bd8e8a7ff5b554f7c1']
    ),
    RunObject: T.Object(cache['ca4149ebb610524f2504d5efcb933037']),
    CreateRunRequest: T.Object(cache['889c497d349b903ef8b7e66f1f7f1f78'], {
      additionalProperties: false
    }),
    ListRunsResponse: T.Object(cache['a7527aec923b3c24c4a77e5b5b347ee3']),
    ModifyRunRequest: T.Object(cache['e72516203ab15db84c83493e3c34ce40'], {
      additionalProperties: false
    }),
    SubmitToolOutputsRunRequest: T.Object(
      cache['2a39b62dc91107419a6b6b45a2fd3cde'],
      {
        additionalProperties: false
      }
    ),
    RunToolCallObject: T.Object(cache['93c4cc2f26696eb059d1c44f9ea0aa71']),
    CreateThreadAndRunRequest: T.Object(
      cache['2aa38b2cf412659a625c062134f34400'],
      {
        additionalProperties: false
      }
    ),
    ThreadObject: T.Object(cache['843eeaceedb08259af683687a0aa2bdf']),
    CreateThreadRequest: T.Object(cache['12819c881a5e74b6f58a9f0891043262'], {
      additionalProperties: false
    }),
    ModifyThreadRequest: T.Object(cache['1c720356a35580bcf8e4b9b5a920ed57'], {
      additionalProperties: false
    }),
    DeleteThreadResponse: T.Object(cache['9939d1955732b534db457a6302c78878']),
    ListThreadsResponse: T.Object(cache['48c6b645f5107275bc015bcd2114b1ae']),
    MessageObject: T.Object(cache['9919ce439b06e6cb45eba3bc75cbb9a6']),
    MessageDeltaObject: T.Object(cache['bd3753ba84267f249a84f4ad186a25d6']),
    CreateMessageRequest: T.Object(cache['dfc91097389707b177bd01c35e017eaa'], {
      additionalProperties: false
    }),
    ModifyMessageRequest: T.Object(cache['e72516203ab15db84c83493e3c34ce40'], {
      additionalProperties: false
    }),
    DeleteMessageResponse: T.Object(cache['9abc628d8039f81daf13b967df78ff44']),
    ListMessagesResponse: T.Object(cache['59d3dec5b533735db4e2f3a3e16561d7']),
    MessageContentImageFileObject: T.Object(
      cache['057e362af536dff5c62509e7c0d26217']
    ),
    MessageDeltaContentImageFileObject: T.Object(
      cache['dd7e756c08a427be9b6c8e981b6f21f3']
    ),
    MessageContentImageUrlObject: T.Object(
      cache['eafa27404f5be1f4e0c7382dcac6aa1b']
    ),
    MessageDeltaContentImageUrlObject: T.Object(
      cache['68a79dee45eaed0dd6ee52bf9dbfb3fe']
    ),
    MessageContentTextObject: T.Object(
      cache['8a6b960cacf351db2aeb36df07bd437f']
    ),
    MessageRequestContentTextObject: T.Object(
      cache['8721d6be86e9e1099dff9fb1547d5fe4']
    ),
    MessageContentTextAnnotationsFileCitationObject: T.Object(
      cache['b451fd37b4d64d72fd7b3eda45094708']
    ),
    MessageContentTextAnnotationsFilePathObject: T.Object(
      cache['923b42080f94604245ea25b07159bf56']
    ),
    MessageDeltaContentTextObject: T.Object(
      cache['68a741d3ab394ef49caa56ef9c82e38f']
    ),
    MessageDeltaContentTextAnnotationsFileCitationObject: T.Object(
      cache['0d6193811156f8b80dd1da6cc1333c6d']
    ),
    MessageDeltaContentTextAnnotationsFilePathObject: T.Object(
      cache['5996d6360d41a346ed65bff1ad934c12']
    ),
    RunStepObject: T.Object(cache['854aaaa64b1e916bcd12f8e453be1319']),
    RunStepDeltaObject: T.Object(cache['4a8085256bc70defb23fb255e39169b1']),
    ListRunStepsResponse: T.Object(cache['e52dccee327d5a8f917ad2553f54a22a']),
    RunStepDetailsMessageCreationObject: T.Object(
      cache['7341a2e6b5b7ef84dae480cd8e7ee1e9']
    ),
    RunStepDeltaStepDetailsMessageCreationObject: T.Object(
      cache['a740499823065c2d5fe19d94d9d29016']
    ),
    RunStepDetailsToolCallsObject: T.Object(
      cache['9f3aa0a0196de37a7ffc5353ea27fa3a']
    ),
    RunStepDeltaStepDetailsToolCallsObject: T.Object(
      cache['d91c599917ea16662d0bc6ae28e39c69']
    ),
    RunStepDetailsToolCallsCodeObject: T.Object(
      cache['530736f08989089adcfcd56bf3259f4e']
    ),
    RunStepDeltaStepDetailsToolCallsCodeObject: T.Object(
      cache['90fb45ee9d24e812f2bce870f6437f19']
    ),
    RunStepDetailsToolCallsCodeOutputLogsObject: T.Object(
      cache['2dae3289e35ff93bd96a0ab44c7e38b9']
    ),
    RunStepDeltaStepDetailsToolCallsCodeOutputLogsObject: T.Object(
      cache['859c500bbee11e8939ff5cd2cb221489']
    ),
    RunStepDetailsToolCallsCodeOutputImageObject: T.Object(
      cache['1095c9779fbfeb9a60166770440713c5']
    ),
    RunStepDeltaStepDetailsToolCallsCodeOutputImageObject: T.Object(
      cache['8931e2f6296928a3271a232a025fe035']
    ),
    RunStepDetailsToolCallsFileSearchObject: T.Object(
      cache['2f188caf7404c22c7e647eefaf915f1a']
    ),
    RunStepDeltaStepDetailsToolCallsFileSearchObject: T.Object(
      cache['d763f7e67bae401d784edd02e5d7f1d5']
    ),
    RunStepDetailsToolCallsFunctionObject: T.Object(
      cache['fac4366cb736fe71dcaa3d14deb14c5f']
    ),
    RunStepDeltaStepDetailsToolCallsFunctionObject: T.Object(
      cache['527f17af52d8fe7a26829282496400c5']
    ),
    VectorStoreExpirationAfter: T.Object(
      cache['497041f3f833dcb471822d03a9157276']
    ),
    VectorStoreObject: T.Object(cache['106f91aac5881e610e7179d48348abbb']),
    CreateVectorStoreRequest: T.Object(
      cache['bb490d308693e8cdd597c0ee42323db6'],
      {
        additionalProperties: false
      }
    ),
    UpdateVectorStoreRequest: T.Object(
      cache['89224ea2a0ac9d6f9f0f50a60a5780dd'],
      {
        additionalProperties: false
      }
    ),
    ListVectorStoresResponse: T.Object(
      cache['ff74fee0b40c9e2f94ce4aaa9f863cc9']
    ),
    DeleteVectorStoreResponse: T.Object(
      cache['3cf239f84a4a43b6d81c8ef36c8b3c6c']
    ),
    VectorStoreFileObject: T.Object(cache['4cfbe31ffd0b4e4eb1b22150bb0f2967']),
    OtherChunkingStrategyResponseParam: T.Object(
      cache['1fec2e9d01288cd17b5bfa655df4a3eb'],
      {
        additionalProperties: false
      }
    ),
    StaticChunkingStrategyResponseParam: T.Object(
      cache['1d8e536284b22230424471ec1eaa0afa'],
      {
        additionalProperties: false
      }
    ),
    StaticChunkingStrategy: T.Object(
      cache['29c111f913b37f58cdbde793f02345b5'],
      {
        additionalProperties: false
      }
    ),
    AutoChunkingStrategyRequestParam: T.Object(
      cache['22d359b68212ad54c64a4e3a3b548024'],
      {
        additionalProperties: false
      }
    ),
    StaticChunkingStrategyRequestParam: T.Object(
      cache['1d8e536284b22230424471ec1eaa0afa'],
      {
        additionalProperties: false
      }
    ),
    ChunkingStrategyRequestParam: UnionOneOf(
      cache['60d0bd0eaf0d798d127886a0c5667be7']
    ),
    CreateVectorStoreFileRequest: T.Object(
      cache['ea7e7440bc7428abf277aa8ee93183ae'],
      {
        additionalProperties: false
      }
    ),
    ListVectorStoreFilesResponse: T.Object(
      cache['fe5638ea0024ceb6efb6cd1bb3123c9e']
    ),
    DeleteVectorStoreFileResponse: T.Object(
      cache['6ea46d7ad422330b1c96d02366583a97']
    ),
    VectorStoreFileBatchObject: T.Object(
      cache['faab15370c6ceb87be31157f86ef9c4d']
    ),
    CreateVectorStoreFileBatchRequest: T.Object(
      cache['cd92fc6b54146a71b64b6ef1f72c6e7f'],
      {
        additionalProperties: false
      }
    ),
    AssistantStreamEvent: UnionOneOf(cache['3a8d89b12b4a424eed3b84bcc33c5507']),
    ThreadStreamEvent: UnionOneOf(cache['b2b9513992ce25186fe9e6ef88c1245a']),
    RunStreamEvent: UnionOneOf(cache['a9edd54879d8c269b2113b1e2a3bfd8c']),
    RunStepStreamEvent: UnionOneOf(cache['420a6fd74345af50b9e1a41e18ae96af']),
    MessageStreamEvent: UnionOneOf(cache['d99417cd7d64bcf008767f1973a7d84c']),
    ErrorEvent: T.Object(cache['8dac0bc5f136e9037b8071c21579f9f7']),
    DoneEvent: T.Object(cache['309e13e70aef96c338656e1ffd6106e1']),
    Batch: T.Object(cache['fd4c666117c585b3f0057a20ad2d2eb7']),
    BatchRequestInput: T.Object(cache['a1a4e5ba50917aa2fc6f201c45ee9585']),
    BatchRequestOutput: T.Object(cache['876c76c736c0c1e61fa06f9f1bf7cf36']),
    ListBatchesResponse: T.Object(cache['e76a3aeddcfcbc86b8cc209163cac0e0'])
  }
}

export { schema, _components as components }
