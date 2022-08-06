const append =
  <T, U>(appendValues: Iterable<U>) =>
    function* (values: Iterable<T>): Generator<T | U> {
      for (const value of values) {
        yield value
      }
      for (const value of appendValues) {
        yield value
      }
    }

export default append
