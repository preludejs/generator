/**
 * Creates a reducer function that applies a specified reduction function to an iterable.
 *
 * @template T - Element type
 * @template U - Result type
 * @param reduction - Function that combines the accumulated result with each element
 * @param initial - Initial value for the reduction
 * @returns A function that reduces an iterable to a single value
 *
 * @example
 * ```ts
 * G.pipe(
 *   G.range(1, 5),
 *   G.reduce((sum, n) => sum + n, 0)
 * ) // 15
 * ```
 */
export const reduce =
  <T, U>(reduction: (result: U, value: T, index: number) => U, initial: U) =>
    (values: Iterable<T>): U => {
      let result = initial
      let index = 0
      for (const value of values) {
        result = reduction(result, value, index++)
      }
      return result
    }

export default reduce
