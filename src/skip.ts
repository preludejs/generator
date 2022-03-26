const skip =
  <T>(n: number) =>
    function* (g: Iterable<T>): Generator<T> {
      let i = 0
      for (const value of g) {
        if (++i > n) {
          yield value
        }
      }
    }

export default skip
