const takeWhile =
  <T>(f: (value: T, index: number) => boolean) =>
    function* (g: Iterable<T>): Generator<T> {
      let i = 0
      for (const value of g) {
        if (!f(value, i++)) {
          break
        }
        yield value
      }
    }

export default takeWhile
