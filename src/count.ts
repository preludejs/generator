/** @returns number of elements that passed predicate test. */
const count =
  <T>(predicate: (value: T, index: number) => boolean = () => true) =>
    (values: Iterable<T>): number => {
      let result = 0
      let index = 0
      for (const value of values) {
        if (predicate(value, index++)) {
          result++
        }
      }
      return result
    }

export default count
