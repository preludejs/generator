/** @yields elements passing provided predicate only. */
const filter =
  <T>(predicate: (value: T, index: number) => boolean) =>
    function* (values: Iterable<T>): Generator<T> {
      let index = 0
      for (const value of values) {
        if (predicate(value, index++)) {
          yield value
        }
      }
    }

export default filter
