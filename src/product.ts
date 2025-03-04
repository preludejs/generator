import reduce from './reduce.js'

/**
 * Calculates the product of all numbers in an iterable.
 * Multiplies all elements together, starting with 1.
 *
 * @returns The product of all elements in the iterable
 *
 * @example
 * ```ts
 * G.pipe(
 *   G.range(1, 5),
 *   G.product
 * ) // 120 (1*2*3*4*5)
 * ```
 */
export const product =
  reduce<number, number>((r, _) => r * _, 1)

export default product
