const take =
  <T>(n: number) => {
    if (!Number.isSafeInteger(n)) {
      throw new TypeError(`Expected number of elements to take to be a safe integer, got ${n}.`)
    }
    return function* (values: Iterable<T>): Generator<T> {
      if (n <= 0) {
        return
      }
      let index = 0
      for (const value of values) {
        yield value
        if (++index >= n) {
          break
        }
      }
    }
  }

export default take
