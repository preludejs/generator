import reduce from './reduce.js'

/** @returns {BigInt} product of iterable elements. */
const bigproduct =
  reduce<bigint, bigint>((r, _) => r * _, 1n)

export default bigproduct
