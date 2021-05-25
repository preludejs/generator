const while_ =
  function *<T>(f: (value: T, index: number) => boolean, g: Iterable<T>): Generator<T> {
    let i = 0
    for (const _ of g) {
      if (!f(_, i++)) {
        break
      }
      yield _
    }
  }

export default while_
