/**
 * Returns the single element in an iterable.
 * Throws an error if the iterable contains zero or more than one element.
 *
 * @template T - Element type
 * @param values - The input iterable
 * @returns The single element in the iterable
 * @throws {Error} If there are no elements in the iterable
 * @throws {Error} If there is more than one element in the iterable
 * @see maybeSingle - Non-throwing variant that returns undefined for 0 or >1 elements
 *
 * @example
 * ```ts
 * G.pipe(
 *   G.of([42]),
 *   G.single
 * ) // 42
 *
 * // Throws "Expected single element, got more."
 * G.pipe(
 *   G.range(1, 2),
 *   G.single
 * )
 * ```
 */
export const single =
  <T>(values: Iterable<T>): T => {
    let index = 0
    let first: undefined | T
    for (const value of values) {
      if (++index === 1) {
        first = value
        continue
      }
      throw new Error('Expected single element, got more.')
    }
    if (index === 0) {
      throw new Error('Expected single element, got none.')
    }
    return first as T
  }

export default single
