import reduce from './reduce.js'

/** @returns {BigInt} product of iterable elements. */
const bigproduct =
  reduce<bigint, bigint>((result, value) => result * value, 1n)

export default bigproduct
