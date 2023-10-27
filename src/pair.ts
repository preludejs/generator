const pair =
  <A, B>(rhsIterable: Iterable<B>) =>
    function* (lhsIterable: Iterable<A>): Generator<[ A, B ]> {
      const lhsIterator = lhsIterable[Symbol.iterator]()
      const rhsIterator = rhsIterable[Symbol.iterator]()
      while (true) {
        const lhsResult = lhsIterator.next()
        const rhsResult = rhsIterator.next()
        if (lhsResult.done || rhsResult.done) {
          break
        }
        yield [ lhsResult.value, rhsResult.value ]
      }
      lhsIterator.return?.()
      rhsIterator.return?.()
    }

export default pair
