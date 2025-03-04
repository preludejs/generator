/**
 * Creates a generator that filters out null and undefined values from an iterable.
 *
 * @template T - Type of elements in the iterable
 * @param values - The source iterable to filter
 * @yields All non-nullish values from the source iterable
 * @returns A generator yielding only non-null, non-undefined values
 *
 * @example
 * // Filter out nullish values
 * const results = [...compact([1, null, 2, undefined, 3])]
 * // Result: [1, 2, 3]
 *
 * @see defined - For filtering out only undefined values (preserving null)
 */
export const compact =
  function* <T>(values: Iterable<T>): Generator<NonNullable<T>> {
    for (const value of values) {
      if (value != null) {
        yield value as NonNullable<T>
      }
    }
  }

export default compact
