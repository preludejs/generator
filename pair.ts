const pair =
  function *<A, B>(ga: Generator<A>, gb: Generator<B>): Generator<[ A, B ]> {
    while (true) {
      const a = ga.next()
      const b = gb.next()
      if (a.done || b.done) {
        break
      }
      yield [ a.value, b.value ]
    }
  }

export default pair
