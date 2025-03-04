import * as Cmp from '@prelude/cmp'

/**
 * Returns a generator that compares two sorted iterables and yields tuples of corresponding elements.
 * For matched elements, yields [lhs, rhs]. For elements only in lhs, yields [lhs, undefined].
 * For elements only in rhs, yields [undefined, rhs].
 *
 * @template Lhs - The type of left-hand side elements
 * @template Rhs - The type of right-hand side elements
 * @param rhsValues - The right-hand side iterable (must be sorted)
 * @param cmp - The comparison function for comparing lhs and rhs elements
 * @param direction - The direction of comparison (ascending by default)
 * @yields Tuples of corresponding elements from both iterables
 * @see {@link diff} for a version that doesn't require presorted inputs
 * @example
 * ```ts
 * G.pipe(
 *   [1, 3, 5],
 *   G.sortedDiff([2, 3, 4], (a, b) => a - b),
 *   G.array
 * ) // [[1, undefined], [undefined, 2], [3, 3], [5, undefined], [undefined, 4]]
 * ```
 */
export const sortedDiff =
  <Lhs, Rhs>(rhsValues: Iterable<Rhs>, cmp: Cmp.t<Lhs, Rhs>, direction = Cmp.asc) =>
    function* (lhsValues: Iterable<Lhs>): Generator<[lhs: undefined | Lhs, rhs: undefined | Rhs]> {
      const lhsIterator = lhsValues[Symbol.iterator]()
      const rhsIterator = rhsValues[Symbol.iterator]()
      let lhsValue = lhsIterator.next()
      let rhsValue = rhsIterator.next()
      while (!lhsValue.done && !rhsValue.done) {
        switch (cmp(lhsValue.value, rhsValue.value)) {
          case Cmp.eq:
            yield [lhsValue.value, rhsValue.value]
            lhsValue = lhsIterator.next()
            rhsValue = rhsIterator.next()
            break
          case direction:
            yield [lhsValue.value, undefined]
            lhsValue = lhsIterator.next()
            break
          default:
            yield [undefined, rhsValue.value]
            rhsValue = rhsIterator.next()
        }
      }
      while (!lhsValue.done) {
        yield [lhsValue.value, undefined]
        lhsValue = lhsIterator.next()
      }
      while (!rhsValue.done) {
        yield [undefined, rhsValue.value]
        rhsValue = rhsIterator.next()
      }
    }

export default sortedDiff
