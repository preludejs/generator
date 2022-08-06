const prepend =
  <T, U>(prependValues: Iterable<U>) =>
    function* (values: Iterable<T>): Generator<T | U> {
      for (const value of prependValues) {
        yield value
      }
      for (const value of values) {
        yield value
      }
    }

export default prepend
