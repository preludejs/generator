/** Performs side effect function on each of iterable value. */
const consume =
  <T>(f?: (value: T) => unknown) =>
    (g: Iterable<T>): void => {
      for (const value of g) {
        f?.(value)
      }
    }

export default consume
