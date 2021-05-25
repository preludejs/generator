const withIndex =
  function *<T>(g: Iterable<T>): Generator<[number, T]> {
    let i = 0
    for (const _ of g) {
      yield [ i++, _ ]
    }
  }

export default withIndex
