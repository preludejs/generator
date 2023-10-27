/** @yields flattened values from provided iterable iterables. */
const flatten =
  function* <T>(iterables: Iterable<Iterable<T>>) {
    for (const iterable of iterables) {
      yield* iterable
    }
  }

export default flatten
