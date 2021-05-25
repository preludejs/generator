const unique =
  function *<T>(f: (value: T) => string, g: Generator<T>): Generator<T> {
    const seen = new Set<string>()
    for (const _ of g) {
      if (!seen.has(f(_))) {
        yield _
      }
    }
  }

export default unique
