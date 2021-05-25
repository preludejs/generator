import reduce from './reduce'

const max =
  (g: Iterable<number>): number =>
    reduce((r, _) => Math.max(r, _), -Infinity, g)

export default max
