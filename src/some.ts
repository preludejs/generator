/** @returns `true` if at least one `f`-predicate returns `true`, `false` otherwise. */
const some =
  <T>(predicate: (value: T, index: number) => boolean) =>
    (values: Iterable<T>): boolean => {
      let index = 0
      for (const value of values) {
        if (predicate(value, index++)) {
          return true
        }
      }
      return false
    }

export default some
