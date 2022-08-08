import * as Cmp from '@prelude/cmp'
import pipe from './pipe.js'
import pipe0 from './pipe0.js'
import sort from './sort.js'
import sortedDiff from './sorted-diff.js'

const diff =
  <Lhs, Rhs, Comparable = Lhs & Rhs>(rhsValues: Iterable<Rhs>, cmp: Cmp.t<Comparable>, {
    comparableLhs = (lhs: Lhs) => lhs as unknown as Comparable,
    comparableRhs = (rhs: Rhs) => rhs as unknown as Comparable,
    sortLhs = true,
    sortRhs = true,
    direction = Cmp.asc
  }: {
    comparableLhs?: (lhs: Lhs) => Comparable,
    comparableRhs?: (rhs: Rhs) => Comparable,
    sortLhs?: boolean,
    sortRhs?: boolean,
    direction?: Cmp.R
  } = {}): (lhsValues: Iterable<Lhs>) => Generator<[lhs: undefined | Lhs, rhs: undefined | Rhs]> => {
    const directionCmp =
      direction === Cmp.asc ?
        cmp :
        Cmp.reversed(cmp)
    if (sortRhs) {
      const rhsCmp =
        (a: Rhs, b: Rhs) =>
          directionCmp(comparableRhs(a), comparableRhs(b))
      const rhsValues_ =
        pipe(
          rhsValues,
          sort(rhsCmp)
        )
      return diff(rhsValues_, cmp, { sortLhs, sortRhs: false, direction })
    }
    if (sortLhs) {
      const lhsCmp =
        (a: Lhs, b: Lhs) =>
          directionCmp(comparableLhs(a), comparableLhs(b))
      return pipe0(
        sort(lhsCmp),
        diff(rhsValues, cmp, {
          sortLhs: false,
          sortRhs,
          direction
        })
      )
    }
    return sortedDiff(rhsValues, (a, b) => cmp(comparableLhs(a), comparableRhs(b)), direction)
  }

export default diff
