const unique =
  <T>(f: (value: T, index: number) => string | number) =>
    function* (g: Iterable<T>): Generator<T> {
      const seen = new Set<string | number>()
      let index = 0
      for (const value of g) {
        const k = f(value, index++)
        if (!seen.has(k)) {
          seen.add(k)
          yield value
        }
      }
    }

export default unique
