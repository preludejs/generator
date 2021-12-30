/** @returns first value passing predicate or `undefined` if not found. */
const maybeFind =
  <T>(f: (value: T, index: number) => boolean) =>
    (g: Iterable<T>): undefined | T => {
      let i = 0
      for (const value of g) {
        if (f(value, i++)) {
          return value
        }
      }
      return
    }

export default maybeFind
