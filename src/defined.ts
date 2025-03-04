import type { Defined } from './prelude.js'

/**
 * Creates a generator that yields all values from an iterable except undefined.
 *
 * @template T - Type of elements in the iterable
 * @param values - The source iterable to filter
 * @yields All non-undefined values from the source iterable
 * @returns A generator that filters out undefined values
 *
 * @example
 * // Filter out undefined values
 * const results = [...defined([1, undefined, 2, undefined, 3])]
 * // Result: [1, 2, 3]
 *
 * @example
 * // Null values are preserved (unlike with compact)
 * const results = [...defined([1, null, 2, undefined, 3])]
 * // Result: [1, null, 2, 3]
 *
 * @see compact - For filtering out both null and undefined values
 */
export const defined =
  function* <T>(values: Iterable<T>): Generator<Defined<T>> {
    for (const value of values) {
      if (typeof value !== 'undefined') {
        yield value as Defined<T>
      }
    }
  }

export default defined
