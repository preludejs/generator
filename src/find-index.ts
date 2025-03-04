/**
 * Creates a function that returns the index of the first element in an iterable that satisfies the predicate.
 * Similar to Array.prototype.findIndex(), but works with any iterable.
 *
 * @template T - Type of elements in the iterable
 * @param predicate - Function to test each element and its index
 * @returns A function that takes an iterable and returns the index of the first matching element,
 *          or -1 if no match is found
 *
 * @example
 * // Find index of first even number
 * const firstEvenIndex = findIndex((n: number) => n % 2 === 0)([1, 3, 5, 6, 7, 8])
 * // Result: 3
 *
 * @example
 * // Find index of first element greater than 10
 * const greaterThan10Index = findIndex((n: number) => n > 10)([1, 5, 8, 12, 15])
 * // Result: 3
 *
 * @example
 * // No match returns -1
 * const negativeIndex = findIndex((n: number) => n < 0)([1, 2, 3, 4])
 * // Result: -1
 */
export const findIndex =
  <T>(predicate: (value: T, index: number) => boolean) =>
    (values: Iterable<T>) => {
      let index = 0
      for (const value of values) {
        if (predicate(value, index)) {
          return index
        }
        index++
      }
      return -1
    }

export default findIndex
