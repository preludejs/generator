import reduce from './reduce.js'

const product =
  reduce<number, number>((r, _) => r * _, 1)

export default product
