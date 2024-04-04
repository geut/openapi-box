import test, { after } from 'node:test'
import assert from 'node:assert'
import { readFile, writeFile, mkdir } from 'node:fs/promises'

import fastify from 'fastify'
import fastifySwagger from '@fastify/swagger'
import { Type } from '@sinclair/typebox'
import qs from 'qs'
import { expectTypeOf } from 'expect-type'

import { write } from '../src/writer.js'
import { createClient } from '../src/client.js'

const app = fastify({
  logger: false,
  querystringParser: str => qs.parse(str)
})

await app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Test swagger',
      description: 'testing the fastify swagger api',
      version: '0.1.0'
    },
    servers: [{
      url: 'http://localhost'
    }]
  }
})

app.get('/hello', () => {
  return { hello: true }
})

app.get('/hello-typed', {
  schema: {
    response: {
      200: Type.Object({
        hello: Type.Boolean()
      }),
      404: Type.Object({
        error: Type.String()
      })
    }
  }
}, () => {
  return { hello: true }
})

app.get('/multiple-content', {
  schema: {
    response: {
      200: {
        content: {
          'application/json': {
            schema: Type.Object({
              name: Type.String()
            })
          },
          'application/vnd.v1+json': {
            schema: Type.Object({
              title: Type.String()
            })
          }
        }
      },
      404: Type.Object({
        error: Type.String()
      })
    }
  }
}, () => {
  return { name: 'test' }
})

const headers = Type.Object({
  auth: Type.String()
})

const params = Type.Object({
  id: Type.Optional(Type.String())
})

const querystring = Type.Object({
  filter: Type.String(),
  address: Type.Array(Type.String()),
  deep: Type.Object({
    deepTitle: Type.String()
  })
})

const body = Type.Object({
  human: Type.Object({
    name: Type.String(),
    age: Type.Optional(Type.Number()),
    gender: Type.Union([
      Type.Literal('batman'),
      Type.Literal('joker')
    ])
  }),
  address: Type.Array(
    Type.Object({
      title: Type.String(),
      address: Type.String()
    })
  ),
  recursive: Type.Object({})
})

app.post('/some-route/:id', {
  schema: {
    description: 'post some data',
    summary: 'qwerty',
    params,
    querystring,
    headers,
    body,
    response: {
      201: Type.Object({
        params,
        query: querystring,
        body
      }, { description: 'description response' })
    }
  }
}, (req, reply) => ({
  headers: {
    auth: req.headers.auth
  },
  params: req.params,
  query: req.query,
  body: req.body
}))

test('basic test', async () => {
  after(async () => {
    await app.close()
  })

  const address = await app.listen()

  await mkdir('./tmp').catch(() => {})

  await test('esm', async () => {
    await writeFile('./tmp/schema.js', await write(JSON.parse(JSON.stringify(app.swagger()))))
    assert.equal(await readFile('./tmp/schema.js', 'utf8'), await readFile('./test/schema.txt', 'utf8'))
  })

  await test('basic test cjs', async () => {
    await writeFile('./tmp/schema.cjs', await write(JSON.parse(JSON.stringify(app.swagger())), { cjs: true }))
    assert.equal(await readFile('./tmp/schema.cjs', 'utf8'), await readFile('./test/schema.cjs.txt', 'utf8'))
  })

  await test('client', async () => {
    const { schema } = await import('../tmp/schema.js')
    const client = createClient({
      schema,
      baseUrl: address,
      queryParser: qs.stringify
    })

    await test('client.fetch /hello', async () => {
      const { data } = await client.fetch({
        path: '/hello',
        method: 'GET'
      })

      expectTypeOf(data).toEqualTypeOf(/** @type {any} */({ hello: true }))
    })

    await test('client.fetch /hello-typed', async () => {
      const { data } = await client.fetch({
        path: '/hello-typed',
        method: 'GET'
      })

      expectTypeOf(data).toEqualTypeOf({ hello: true })
    })

    await test('client.fetch /multiple-content', async () => {
      const { data } = await client.fetch({
        path: '/multiple-content',
        method: 'GET'
      })

      expectTypeOf(data).toEqualTypeOf(/** @type {{ name: string }} */({ name: 'test' }))
    })

    await test('client.fetch validation', async () => {
      const { data, error, clientError } = await client.fetch({
        path: '/some-route/{id}',
        method: 'POST',
        args: {
          params: {
            // @ts-ignore
            id: 2
          }
        }
      })

      assert.equal(data, null)
      assert.equal(error, null)
      expectTypeOf(clientError).not.toBeNull()
      expectTypeOf(clientError).toEqualTypeOf(/** @type {import('../src/client.js').FetchClientErrorType} */({
        code: 'ERR_CLIENT_VALIDATION',
        message: 'client validation error',
        errors: [
          {
            message: 'Expected object',
            path: '/headers',
            value: undefined
          },
          {
            message: 'Expected string',
            path: '/params/id',
            value: 2
          },
          {
            message: 'Expected object',
            path: '/query',
            value: undefined
          },
          {
            message: 'Expected object',
            path: '/body',
            value: undefined
          },
          {
            message: 'Expected required property',
            path: '/headers',
            value: undefined
          },
          {
            message: 'Expected required property',
            path: '/query',
            value: undefined
          },
          {
            message: 'Expected required property',
            path: '/body',
            value: undefined
          }
        ]
      }))
    })

    await test('client.bind', async () => {
      const postRoute = client.bind({
        path: '/some-route/{id}',
        method: 'POST'
      })

      /** @type {Parameters<typeof postRoute>[0]} */
      const args = {
        headers: {
          auth: 'test'
        },
        params: {
          id: '1'
        },
        query: {
          filter: 'some filter',
          address: ['addres'],
          deep: {
            deepTitle: 'test'
          }
        },
        body: {
          human: {
            age: 30,
            name: 'bruce',
            gender: 'batman'
          },
          address: [{
            address: 'addres1',
            title: 'test'
          }],
          recursive: {
            testing: true
          }
        }
      }

      const { data, error, clientError } = await postRoute(args)
      assert.equal(error, undefined)
      assert.equal(clientError, undefined)
      expectTypeOf(data).toEqualTypeOf(/** @type {import('../tmp/schema.js').Paths['/some-route/{id}']['POST']['data']} */(args))
    })
  })
})

test('petstore', async () => {
  const petstore = JSON.parse(await readFile('./test/petstore.json', 'utf-8'))
  await writeFile('./tmp/petstore.js', await write(petstore))
  assert.equal(await readFile('./tmp/petstore.js', 'utf8'), await readFile('./test/petstore.txt', 'utf8'))

  const { components } = await import('../tmp/petstore.js')

  assert.ok('schemas' in components)
  assert.ok(Object.keys(components['schemas']).length > 0)
  assert.deepEqual(components['schemas']['Pet'], Type.Object({
    id: Type.Integer({ format: 'int64' }),
    name: Type.String(),
    tag: Type.Optional(Type.String())
  }))

  assert.ok('parameters' in components)
  assert.ok(Object.keys(components['parameters']).length > 0)
  assert.deepEqual(components['parameters']['limitParam'], Type.Integer({ format: 'int32', 'x-in': 'query' }))

  assert.ok('responses' in components)
  assert.ok(Object.keys(components['responses']).length > 0)
  assert.deepEqual(components['responses']['GeneralError'], Type.Object({
    code: Type.Integer({ format: 'int32' }),
    message: Type.String()
  }, {
    'x-content-type': 'application/json'
  }))

  assert.ok('requestBodies' in components)
  assert.ok(Object.keys(components['requestBodies']).length > 0)
  assert.deepEqual(components['requestBodies']['Pet'], Type.Object({
    id: Type.Integer({ format: 'int64' }),
    name: Type.String(),
    tag: Type.Optional(Type.String())
  }, {
    'x-content-type': 'application/json'
  }))
})
