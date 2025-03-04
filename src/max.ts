import reduce from './reduce.js'

/**
 * Finds the maximum value in a collection of numbers.
 *
 * @template T Type of values in the collection (must be numbers)
 * @returns The maximum value found or -Infinity if the collection is empty
 *
 * @example
 * ```ts
 * G.pipe(
 *   [5, 3, 9, 1, 7],
 *   G.max
 * ) // 9
 *
 * G.pipe(
 *   [], // empty array
 *   G.max
 * ) // -Infinity
 * ```
 */
export const max =
  reduce<number, number>((result, value) => Math.max(result, value), -Infinity)

export default max
