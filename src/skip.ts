const skip =
  <T>(n: number) =>
    function* (g: Generator<T>): Generator<T> {
      for (let i = 0; i < n; i++) {
        if (g.next().done) {
          break
        }
      }
      yield *g
    }

export default skip
