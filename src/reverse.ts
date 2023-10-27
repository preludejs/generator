/** @yields values in reversed order. */
const reverse =
  function* <T>(values: Iterable<T>) {
    yield* Array.from(values).reverse()
  }

export default reverse
