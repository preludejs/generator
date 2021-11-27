import reduce from './reduce.js'

const min =
  reduce<number, number>((r, value) => Math.min(r, value), +Infinity)

export default min
