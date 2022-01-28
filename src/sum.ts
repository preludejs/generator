import reduce from './reduce.js'

const sum =
  reduce<number, number>((r, _) => r + _, 0)

export default sum
