/** @returns first value passing predicate or `undefined` if not found. */
const maybeFind =
  <T>(predicate: (value: T, index: number) => boolean) =>
    (values: Iterable<T>): undefined | T => {
      let index = 0
      for (const value of values) {
        if (predicate(value, index++)) {
          return value
        }
      }
      return
    }

export default maybeFind
