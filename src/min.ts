import reduce from './reduce.js'

/**
 * Finds the minimum value in a collection of numbers.
 *
 * @template T Type of values in the collection (must be numbers)
 * @returns The minimum value found or +Infinity if the collection is empty
 *
 * @example
 * ```ts
 * G.pipe(
 *   [5, 3, 9, 1, 7],
 *   G.min
 * ) // 1
 *
 * G.pipe(
 *   [], // empty array
 *   G.min
 * ) // +Infinity
 * ```
 */
export const min =
  reduce<number, number>((result, value) => Math.min(result, value), +Infinity)

export default min
