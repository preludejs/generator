import reduce from './reduce.js'

const max =
  reduce<number, number>((r, value) => Math.max(r, value), -Infinity)

export default max
