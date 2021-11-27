// TODO: close
const pair =
  function *<A, B>(a: Generator<A>, b: Generator<B>): Generator<[ A, B ]> {
    while (true) {
      const a_ = a.next()
      const b_ = b.next()
      if (a_.done || b_.done) {
        break
      }
      yield [ a_.value, b_.value ]
    }
  }

export default pair
