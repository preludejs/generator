const flatMap =
  <T, R>(f: (value: T, index: number) => Iterable<R>) =>
    function* (g: Iterable<T>): Generator<R> {
      let i = 0
      for (const outer of g) {
        for (const inner of f(outer, i++)) {
          yield inner
        }
      }
    }

export default flatMap
