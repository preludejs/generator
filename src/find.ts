/**
 * Creates a function that returns the first element in an iterable that satisfies the predicate.
 * Similar to Array.prototype.find(), but works with any iterable and throws an error if no match is found.
 *
 * @template T - Type of elements in the iterable
 * @param predicate - Function to test each element and its index
 * @returns A function that takes an iterable and returns the first matching element
 * @throws Error if no element passes the predicate test
 *
 * @example
 * // Find first even number
 * const firstEven = find((n: number) => n % 2 === 0)([1, 3, 4, 5, 6])
 * // Result: 4
 *
 * @example
 * // This would throw "Not found." error
 * try {
 *   const firstNegative = find((n: number) => n < 0)([1, 2, 3, 4])
 * } catch (error) {
 *   // Error: "Not found."
 * }
 *
 * @see maybeFind - For a non-throwing variant that returns undefined if not found
 */
export const find =
  <T>(predicate: (value: T, index: number) => boolean) =>
    (values: Iterable<T>): T => {
      let index = 0
      for (const value of values) {
        if (predicate(value, index++)) {
          return value
        }
      }
      throw new Error('Not found.')
    }

export default find
