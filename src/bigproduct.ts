import reduce from './reduce.js'

const bigproduct =
  reduce<bigint, bigint>((r, _) => r * _, 1n)

export default bigproduct
