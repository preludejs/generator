const skip =
  <T>(n: number) =>
    function* (values: Iterable<T>): Generator<T> {
      let index = 0
      for (const value of values) {
        if (++index > n) {
          yield value
        }
      }
    }

export default skip
