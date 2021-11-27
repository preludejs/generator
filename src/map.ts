const map =
  <T, R>(f: (value: T, index: number) => R) =>
    function* (g: Iterable<T>): Generator<R> {
      let i = 0
      for (const _ of g) {
        yield f(_, i++)
      }
    }

export default map
