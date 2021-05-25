const of =
  function *<T>(g: Iterable<T>): Generator<T> {
    for (const value of g) {
      yield value
    }
  }

export default of
