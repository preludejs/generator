const flatten =
  function* <T>(gs: Iterable<Iterable<T>>): Generator<T> {
    for (const g of gs) {
      for (const value of g) {
        yield value
      }
    }
  }

export default flatten
