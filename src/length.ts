import count from './count.js'

/**
 * Returns the length of an iterable.
 * If the iterable has a length property (like arrays), uses that property.
 * Otherwise, counts all elements in the iterable.
 *
 * @param values - The iterable to get the length of
 * @returns The number of elements in the iterable
 *
 * @example
 * ```typescript
 * G.length([1, 2, 3]); // 3 (uses array.length)
 * G.length(new Set([1, 2, 3])); // 3 (uses Set.size)
 * G.length(G.range(1, 5)); // 4 (counts generator elements)
 * ```
 *
 * @see count - For counting elements without checking for length property
 */
export const length =
  (values: Iterable<unknown> & { length?: number }): number =>
    values?.length ?? count()(values)

export default length
