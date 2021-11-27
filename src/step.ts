const step =
  <T>(n: number) =>
    function* (g: Iterable<T>): Generator<T> {
      let i = 0
      for (const value of g) {
        if (i++ % n === 0) {
          yield value
        }
      }
    }

export default step
