import reduce from './reduce.js'

/**
 * Returns the sum of all numbers in the input iterable.
 *
 * @template {number} T - The type of elements in the iterable (must be numbers)
 * @returns The sum of all values in the iterable
 * @example
 * ```ts
 * G.pipe(
 *   [1, 2, 3, 4, 5],
 *   G.sum
 * ) // 15
 * ```
 */
export const sum =
  reduce<number, number>((result, value) => result + value, 0)

export default sum
