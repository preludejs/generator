import reduce from './reduce.js'

/** @returns sum of values. */
const sum =
  reduce<number, number>((result, value) => result + value, 0)

export default sum
