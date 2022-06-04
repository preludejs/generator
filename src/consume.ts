/** Performs side effect function on each of iterable value. */
const consume =
  <T>(maybeHandle?: (value: T) => unknown) =>
    (values: Iterable<T>): void => {
      for (const value of values) {
        maybeHandle?.(value)
      }
    }

export default consume
