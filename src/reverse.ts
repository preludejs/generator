/** @yields values in reversed order. */
const reverse =
  function* <T>(values: Iterable<T>): Generator<T> {
    for (const value of Array.from(values).reverse()) {
      yield value
    }
  }

export default reverse
