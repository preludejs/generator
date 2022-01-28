import reduce from './reduce.js'

const bigsum =
  reduce<bigint, bigint>((r, _) => r + _, 0n)

export default bigsum
