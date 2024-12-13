declare module 'node:test' {
  interface TestContext {
    assert: {
      snapshot: (compare: any) => void
    }
  }
}
