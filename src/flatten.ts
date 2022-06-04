/** @yields flattened values from provided iterable iterables. */
const flatten =
  function* <T>(valuesArray: Iterable<Iterable<T>>): Generator<T> {
    for (const values of valuesArray) {
      for (const value of values) {
        yield value
      }
    }
  }

export default flatten
