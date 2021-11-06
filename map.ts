const map =
  function *<T, R>(g: Iterable<T>, f: (value: T, index: number) => R): Generator<R> {
    let i = 0
    for (const _ of g) {
      yield f(_, i++)
    }
  }

export default map
