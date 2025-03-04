import reduce from './reduce.js'

/**
 * Calculates the sum of all BigInt values in an iterable.
 *
 * @param values - Iterable of BigInt values to add together
 * @returns The sum of all values as a BigInt (returns 0n for empty iterables)
 */
export const bigsum =
  reduce<bigint, bigint>((r, _) => r + _, 0n)

export default bigsum
