const skipWhile =
  <T>(predicate: (value: T, index: number) => boolean) =>
    function* (values: Iterable<T>): Generator<T> {
      let yielding = false
      let index = 0
      for (const value of values) {
        if ((yielding = yielding || !predicate(value, index++))) {
          yield value
        }
      }
    }

export default skipWhile
