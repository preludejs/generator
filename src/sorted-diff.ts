import * as Cmp from '@prelude/cmp'

/**
 * Requires lhs and rhs iterables to be already sorted.
 * @see {@link diff} for a version that doesn't require presorted inputs.
 */
const sortedDiff =
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
