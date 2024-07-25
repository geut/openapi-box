/* eslint-disable no-unused-vars */
declare module 'node:test' {
  interface TestContext {
    assert: {
      snapshot: (compare: any) => void
    }
  }
}
