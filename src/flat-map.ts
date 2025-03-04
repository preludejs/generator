/**
 * Creates a generator that maps each element in an iterable to another iterable,
 * then flattens the results into a single generator.
 * Similar to Array.prototype.flatMap(), but works with any iterable.
 *
 * @template T - Type of elements in the input iterable
 * @template R - Type of elements in the resulting generator
 * @param map - Function that maps each value to an iterable of new values
 * @returns A function that takes an iterable and returns a flattened generator
 * @yields Values from all mapped iterables in sequence
 *
 * @example
 * // Expand each number into an array of that many elements
 * const expanded = [...flatMap((n: number) => Array(n).fill(n))([1, 2, 3])]
 * // Result: [1, 2, 2, 3, 3, 3]
 *
 * @example
 * // Map words to their characters
 * const chars = [...flatMap((word: string) => word)(['hello', 'world'])]
 * // Result: ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']
 *
 * @example
 * // With index
 * const withIndices = [...flatMap((n: number, i: number) => [n, i])([10, 20, 30])]
 * // Result: [10, 0, 20, 1, 30, 2]
 */
export const flatMap =
  <T, R>(map: (value: T, index: number) => Iterable<R>) =>
    function* (values: Iterable<T>): Generator<R> {
      let index = 0
      for (const outer of values) {
        for (const inner of map(outer, index++)) {
          yield inner
        }
      }
    }

export default flatMap
