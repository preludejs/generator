
/** @yields values while predicate returns true. */
const while_ =
  <T>(predicate: (value: T, index: number) => boolean) =>
    function* (values: Iterable<T>): Generator<T> {
      let index = 0
      for (const value of values) {
        if (!predicate(value, index++)) {
          break
        }
        yield value
      }
    }

export default while_
