import iterator from './iterator.js'

const pair =
  function* <A, B>(a: Iterable<A>, b: Iterable<B>): Generator<[ A, B ]> {
    const iteratorA = iterator(a)
    const iteratorB = iterator(b)
    while (true) {
      const resultA = iteratorA.next()
      const resultB = iteratorB.next()
      if (resultA.done || resultB.done) {
        break
      }
      yield [ resultA.value, resultB.value ]
    }
  }

export default pair
