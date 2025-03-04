/**
 * Returns true if at least one element in the iterable satisfies the predicate.
 *
 * @template T - The type of elements in the iterable
 * @param predicate - Function to test each element with its index
 * @returns True if any element passes the predicate test, false otherwise
 * @example
 * ```ts
 * G.pipe(
 *   [1, 2, 3, 4, 5],
 *   G.some(x => x > 3)
 * ) // true
 *
 * G.pipe(
 *   [1, 2, 3],
 *   G.some(x => x > 5)
 * ) // false
 * ```
 */
export const some =
  <T>(predicate: (value: T, index: number) => boolean) =>
    (values: Iterable<T>): boolean => {
      let index = 0
      for (const value of values) {
        if (predicate(value, index++)) {
          return true
        }
      }
      return false
    }

export default some
