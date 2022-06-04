/** @yields unique values using provided mapping function. */
const unique =
  <T>(keyOfValue: (value: T, index: number) => string | number) =>
    function* (values: Iterable<T>): Generator<T> {
      const seen = new Set<string | number>()
      let index = 0
      for (const value of values) {
        const key = keyOfValue(value, index++)
        if (!seen.has(key)) {
          seen.add(key)
          yield value
        }
      }
    }

export default unique
