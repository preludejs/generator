/** @yields values until predicate condition is met (exclusive). */
const until =
  <T>(predicate: (value: T, index: number) => boolean) =>
    function* (values: Iterable<T>): Generator<T> {
      let index = 0
      for (const value of values) {
        if (predicate(value, index++)) {
          break
        }
        yield value
      }
    }

export default until
