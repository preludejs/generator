const unique =
  <T>(f: (value: T) => string | number) =>
    function* (g: Generator<T>): Generator<T> {
      const seen = new Set<string | number>()
      for (const value of g) {
        if (!seen.has(f(value))) {
          yield value
        }
      }
    }

export default unique
