/**
 * Returns a generator that skips the first `n` elements and yields the rest.
 *
 * @template T - The type of elements in the iterable
 * @param n - Number of elements to skip from the beginning
 * @yields Elements after skipping the first n elements
 * @example
 * ```ts
 * G.pipe(
 *   [1, 2, 3, 4, 5],
 *   G.skip(2),
 *   G.array
 * ) // [3, 4, 5]
 * ```
 */
export const skip =
  <T>(n: number) =>
    function* (values: Iterable<T>): Generator<T> {
      let index = 0
      for (const value of values) {
        if (++index > n) {
          yield value
        }
      }
    }

export default skip
