/**
 * Returns the first element from an iterable if it's the only element,
 * undefined if there are no elements, or throws an error if there are multiple elements.
 *
 * @template T Type of values in the iterable
 * @param values The input iterable
 * @returns The single element if it exists, or undefined if the iterable is empty
 * @throws {@link Error} if there are more than one elements
 *
 * @see single for a version that throws when there are no elements
 *
 * @example
 * ```ts
 * G.pipe(
 *   [42],
 *   G.maybeSingle
 * ) // 42
 *
 * G.pipe(
 *   [],
 *   G.maybeSingle
 * ) // undefined
 *
 * // This would throw an Error:
 * // G.pipe([1, 2, 3], G.maybeSingle)
 * ```
 */
export const maybeSingle =
  <T>(values: Iterable<T>): undefined | T => {
    let index = 0
    let first: undefined | T
    for (const value of values) {
      if (++index === 1) {
        first = value
        continue
      }
      throw new Error('Expected no elements or a single element, got more.')
    }
    return first
  }

export default maybeSingle
