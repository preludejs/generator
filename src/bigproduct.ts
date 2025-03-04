import reduce from './reduce.js'

/**
 * Calculates the product of all BigInt values in an iterable.
 *
 * @param values - Iterable of BigInt values to multiply together
 * @returns The product of all values as a BigInt (returns 1n for empty iterables)
 */
export const bigproduct =
  reduce<bigint, bigint>((result, value) => result * value, 1n)

export default bigproduct
