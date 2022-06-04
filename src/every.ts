/** @returns `true` if all elements are passing provided predicate, `false` otherwise. */
const every =
  <T>(predicate: (value: T, index: number) => boolean) =>
    (values: Iterable<T>): boolean => {
      let index = 0
      for (const value of values) {
        if (!predicate(value, index++)) {
          return false
        }
      }
      return true
    }

export default every
