/**
 * Counts the number of elements in an iterable that satisfy an optional predicate function.
 * If no predicate is provided, it counts all elements.
 *
 * @template T - Type of elements in the iterable
 * @param predicate - Optional function to test each element, defaults to counting all elements
 * @returns A function that takes an iterable and returns the count of matching elements
 *
 * @example
 * // Count all elements
 * const total = count()([1, 2, 3, 4, 5])
 * // Result: 5
 *
 * @example
 * // Count even numbers
 * const evenCount = count((n: number) => n % 2 === 0)([1, 2, 3, 4, 5])
 * // Result: 2
 *
 * @example
 * // Count elements at odd indices
 * const oddIndices = count((_, index) => index % 2 === 1)([1, 2, 3, 4, 5])
 * // Result: 2
 */
export const count =
  <T>(predicate: (value: T, index: number) => boolean = () => true) =>
    (values: Iterable<T>): number => {
      let result = 0
      let index = 0
      for (const value of values) {
        if (predicate(value, index++)) {
          result++
        }
      }
      return result
    }

export default count
