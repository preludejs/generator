import iterator from './iterator.js'

const pair =
  <A, B>(rhsValues: Iterable<B>) =>
    function* (values: Iterable<A>): Generator<[ A, B ]> {
      const values_ = iterator(values)
      const rhsValues_ = iterator(rhsValues)
      while (true) {
        const result = values_.next()
        const rhsResult = rhsValues_.next()
        if (result.done || rhsResult.done) {
          break
        }
        yield [ result.value, rhsResult.value ]
      }
    }

export default pair
