import reduce from './reduce.js'

/** @returns minimum value or +Infinity if collection is empty. */
const min =
  reduce<number, number>((result, value) => Math.min(result, value), +Infinity)

export default min
