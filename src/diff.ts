import * as Cmp from '@prelude/cmp'
import pipe from './pipe.js'
import pipe0 from './pipe0.js'
import sort from './sort.js'
import sortedDiff from './sorted-diff.js'

/**
 * Creates a generator that produces pairs showing differences between two iterables.
 *
 * @template Lhs - Type of elements in the left-hand side iterable
 * @template Rhs - Type of elements in the right-hand side iterable
 * @template Comparable - Type used for comparison, defaults to intersection of Lhs & Rhs
 *
 * @param rhsValues - The right-hand side iterable to compare against
 * @param cmp - Comparison function to determine element equality and order
 * @param options - Configuration options
 * @param options.comparableLhs - Function to convert left values to comparable type
 * @param options.comparableRhs - Function to convert right values to comparable type
 * @param options.sortLhs - Whether to sort the left-hand side values
 * @param options.sortRhs - Whether to sort the right-hand side values
 * @param options.direction - Comparison direction (ascending or descending)
 *
 * @returns A function that takes an iterable and yields pairs of differences
 * @yields Pairs [lhs, rhs] where:
 *   - [value, undefined] indicates an element in lhs but not in rhs
 *   - [undefined, value] indicates an element in rhs but not in lhs
 *   - [lhsValue, rhsValue] indicates differing elements
 *
 * @example
 * // Compare two arrays
 * const differences = [...diff([4, 5, 6], Cmp.primitive)([1, 2, 3])]
 * // Result: [[1, undefined], [2, undefined], [3, undefined], [undefined, 4], [undefined, 5], [undefined, 6]]
 */
export const diff =
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
