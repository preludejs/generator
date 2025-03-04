/**
 * Creates a function that transforms each value in an iterable using a mapping function.
 * Similar to Array.prototype.map, but for any iterable.
 *
 * @template T - The type of elements in the input iterable
 * @template R - The type of elements in the output iterable
 * @param mapping - Function that transforms each value; receives value and index
 * @returns A function that takes an iterable and yields mapped values
 * @yields Values transformed by the mapping function
 *
 * @example
 * ```typescript
 * // Double each number
 * const double = G.map(x => x * 2);
 * const result = Array.from(double([1, 2, 3])); // [2, 4, 6]
 *
 * // Use with index
 * const withIndex = G.map((x, i) => `${i}: ${x}`);
 * const result2 = Array.from(withIndex(['a', 'b', 'c'])); // ['0: a', '1: b', '2: c']
 * ```
 *
 * @see flatMap - For mapping one input to multiple outputs
 */
export const map =
  <T, R>(mapping: (value: T, index: number) => R) =>
    function* (values: Iterable<T>) {
      let index = 0
      for (const value of values) {
        yield mapping(value, index++)
      }
    }

export default map
