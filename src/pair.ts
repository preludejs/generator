import iterator from './iterator.js'

const pair =
  function* <A, B>(a: Iterable<A>, b: Iterable<B>): Generator<[ A, B ]> {
    const a_ = iterator(a)
    const b_ = iterator(b)
    while (true) {
      const a__ = a_.next()
      const b__ = b_.next()
      if (a__.done || b__.done) {
        break
      }
      yield [ a__.value, b__.value ]
    }
  }

export default pair
