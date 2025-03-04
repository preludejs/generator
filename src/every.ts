/**
 * Tests whether all elements in an iterable pass the provided predicate function.
 * Similar to Array.prototype.every(), but works with any iterable.
 *
 * @template T - Type of elements in the iterable
 * @param predicate - Function to test each element and its index
 * @returns A function that takes an iterable and returns true if all elements pass the test
 *
 * @example
 * // Check if all numbers are positive
 * const allPositive = every((n: number) => n > 0)([1, 2, 3, 4])
 * // Result: true
 *
 * @example
 * // Check if all numbers are even
 * const allEven = every((n: number) => n % 2 === 0)([2, 4, 5, 6])
 * // Result: false (5 is odd)
 *
 * @example
 * // Using the index parameter
 * const indexMatchesValue = every((val, idx) => val === idx)([0, 1, 2, 3])
 * // Result: true
 *
 * @see some - For testing if at least one element passes a test
 */
export const every =
  <T>(predicate: (value: T, index: number) => boolean) =>
    (values: Iterable<T>): boolean => {
      let index = 0
      for (const value of values) {
        if (!predicate(value, index++)) {
          return false
        }
      }
      return true
    }

export default every
