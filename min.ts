import reduce from './reduce'

const min =
  (g: Iterable<number>): number =>
    reduce((r, _) => Math.min(r, _), +Infinity, g)

export default min
