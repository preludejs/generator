import * as Cmp from '@prelude/cmp'
import pipe0 from './pipe0.js'
import sort from './sort.js'

const aux =
  <T>(rhsValues: Iterable<T>, cmp: Cmp.t<T>, direction = Cmp.asc) =>
    function* (lhsValues: Iterable<T>): Generator<[lhs: undefined | T, rhs: undefined | T]> {
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

const diff =
  <T>(rhsValues: Iterable<T>, cmp: Cmp.t<T>, {
    sortLhs = true,
    sortRhs = true,
    direction = Cmp.asc
  } = {}): (values: Iterable<T>) => Generator<[lhs: undefined | T, rhs: undefined | T]> => {
    const sort_ = sort(direction === Cmp.asc ? cmp : Cmp.reversed(cmp))
    if (sortRhs) {
      return diff(sort_(rhsValues), cmp, { sortLhs, sortRhs: false, direction })
    }
    if (sortLhs) {
      return pipe0(
        sort_,
        diff(rhsValues, cmp, {
          sortLhs: false,
          sortRhs,
          direction
        })
      )
    }
    return aux(rhsValues, cmp, direction)
  }

export default diff
