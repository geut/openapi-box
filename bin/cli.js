#!/usr/bin/env node
import { writeFile } from 'fs/promises'
import ora from 'ora'
import meow from 'meow'
import { write } from '../src/writer.js'

const cli = meow(`
  Usage
    $ openapi-box <input>

  Options
    --output, -o Output filename, default to "schema.js"
    --header, -h Send headers to the request in case <input> is remote
    --cjs Generate a commonjs file

  Examples
    $ openapi-box ./openapi.json
    $ openapi-box https://api.com/doc.json
    $ openapi-box https://api.com/doc.json -h 'Authorization=Bearer secrettoken'
`, {
  importMeta: import.meta,
  allowUnknownFlags: false,
  autoHelp: true,
  flags: {
    output: {
      type: 'string',
      shortFlag: 'o',
      default: 'schema.js'
    },
    header: {
      type: 'string',
      shortFlag: 'h',
      isMultiple: true
    },
    cjs: {
      type: 'boolean',
      default: false
    }
  }
})

if (cli.input.length === 0) {
  cli.showHelp()
}

const input = cli.input[0]

const spinner = ora(`Generating schema from ${input}`).start()

const headers = {}
cli.flags.header.forEach(header => {
  const splitIdx = header.indexOf('=')
  if (splitIdx === -1) {
    spinner.fail('Fetch: the header provided is not valid, it must be: key=value')
    process.exit(1)
  }
  const key = header.slice(0, splitIdx)
  const value = header.slice(splitIdx + 1)
  headers[key] = value
})

let schema
try {
  schema = await write(input, {
    cjs: cli.flags.cjs,
    headers
  })
} catch (err) {
  spinner.fail(err.message)
  process.exit(1)
}

try {
  await writeFile(cli.flags.output, schema)
} catch (err) {
  spinner.fail(err.message)
  process.exit(1)
}

spinner.succeed('Schema done!')
