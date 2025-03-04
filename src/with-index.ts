/**
 * Creates a generator that yields each value from the input iterable along with its index.
 *
 * @template T - The type of elements in the input iterable
 * @param {Iterable<T>} values - The input iterable of values
 * @yields {[T, number]} - A tuple containing the value and its index
 * @example
 * ```ts
 * G.pipe(
 *   [10, 20, 30],
 *   G.withIndex,
 *   G.array
 * ) // [[10, 0], [20, 1], [30, 2]]
 * ```
 */
export const withIndex =
  function* <T>(values: Iterable<T>): Generator<[T, number]> {
    let index = 0
    for (const value of values) {
      yield [ value, index++ ]
    }
  }

export default withIndex
