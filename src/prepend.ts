/**
 * Creates a generator that yields values from prependValues followed by values from the input iterable.
 *
 * @template T Type of values in the input iterable
 * @template U Type of values to prepend
 * @param prependValues The values to yield before the input values
 * @returns A function that takes an iterable and yields a new generator with prepended values
 * @yields Values from prependValues followed by values from the input iterable
 *
 * @example
 * ```ts
 * G.pipe(
 *   [3, 4, 5],
 *   G.prepend([1, 2]),
 *   G.array
 * ) // [1, 2, 3, 4, 5]
 * ```
 */
export const prepend =
  <T, U>(prependValues: Iterable<U>) =>
    function* (values: Iterable<T>): Generator<T | U> {
      for (const value of prependValues) {
        yield value
      }
      for (const value of values) {
        yield value
      }
    }

export default prepend
