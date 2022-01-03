const reverse =
  function* <T>(g: Iterable<T>): Generator<T> {
    for (const value of Array.from(g).reverse()) {
      yield value
    }
  }

export default reverse
