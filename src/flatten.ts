/**
 * Creates a generator that flattens an iterable of iterables into a single sequence.
 * Similar to Array.prototype.flat() with depth 1, but works with any iterable.
 *
 * @template T - Type of elements in the inner iterables
 * @param iterables - An iterable of iterables to flatten
 * @yields Elements from each nested iterable in sequence
 * @returns A generator that yields all elements from the nested iterables
 *
 * @example
 * ```ts
 * import * as G from '@prelude/generator'
 * 
 * // Flatten arrays
 * const result = G.pipe(
 *   G.flatten([[1, 2], [3, 4], [5, 6]]),
 *   G.array
 * )
 * // Result: [1, 2, 3, 4, 5, 6]
 * ```
 *
 * @example
 * ```ts
 * import * as G from '@prelude/generator'
 * 
 * // Flatten different iterable types
 * const result = G.pipe(
 *   G.flatten([new Set([1, 2]), [3, 4], "56"]),
 *   G.array
 * )
 * // Result: [1, 2, 3, 4, '5', '6']
 * ```
 *
 * @example
 * ```ts
 * import * as G from '@prelude/generator'
 * 
 * // Empty iterables are skipped
 * const result = G.pipe(
 *   G.flatten([[1, 2], [], [3, 4]]),
 *   G.array
 * )
 * // Result: [1, 2, 3, 4]
 * ```
 *
 * @see flatMap - For mapping and flattening in one operation
 */
export const flatten =
  function* <T>(iterables: Iterable<Iterable<T>>) {
    for (const iterable of iterables) {
      yield* iterable
    }
  }

export default flatten
