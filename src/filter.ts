/** @yields elements passing provided predicate only. */
const filter =
  <T>(f: (value: T, index: number) => boolean) =>
    function* (g: Iterable<T>): Generator<T> {
      let i = 0
      for (const _ of g) {
        if (f(_, i++)) {
          yield _
        }
      }
    }

export default filter
