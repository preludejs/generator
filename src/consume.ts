/**
 * Iterates through an iterable and optionally performs a side effect on each value.
 * Unlike other generator functions, this doesn't yield values but simply consumes them.
 *
 * @template T - Type of elements in the iterable
 * @param maybeHandle - Optional function to call on each value
 * @returns A function that consumes an iterable and returns void
 *
 * @example
 * // Log each value in an array
 * consume(console.log)([1, 2, 3, 4])
 * // Logs: 1, 2, 3, 4
 *
 * @example
 * // Simply exhaust an iterable without doing anything with the values
 * consume()([1, 2, 3, 4])
 */
export const consume =
  <T>(maybeHandle?: (value: T) => unknown) =>
    (values: Iterable<T>): void => {
      for (const value of values) {
        maybeHandle?.(value)
      }
    }

export default consume
