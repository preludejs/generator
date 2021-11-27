/** @returns `true` if at least one `f`-predicate returns `true`, `false` otherwise. */
const some =
  <T>(f: (value: T, index: number) => boolean) =>
    (g: Iterable<T>): boolean => {
      let index = 0
      for (const value of g) {
        if (f(value, index++)) {
          return true
        }
      }
      return false
    }

export default some
