import reduce from './reduce.js'

/** @returns maximum number or -Infinity if values collection is empty. */
const max =
  reduce<number, number>((result, value) => Math.max(result, value), -Infinity)

export default max
