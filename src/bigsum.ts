import reduce from './reduce.js'

/** @returns {BigInt} sum of iterable elements. */
const bigsum =
  reduce<bigint, bigint>((r, _) => r + _, 0n)

export default bigsum
