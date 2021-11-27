const take =
  <T>(n: number) => {
    if (!Number.isSafeInteger(n)) {
      throw new TypeError(`Expected number of elements to take to be a safe integer, got ${n}.`)
    }
    return function* (g: Iterable<T>): Generator<T> {
      if (n <= 0) {
        return
      }
      let i = 0
      for (const value of g) {
        yield value
        if (++i >= n) {
          break
        }
      }
    }
  }

export default take
