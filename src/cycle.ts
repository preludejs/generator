import of from './of.js'

const cycle =
  function *<T>(g: Iterable<T>): Generator<T> {
    const _s: T[] = []
    for (const _ of g) {
      _s.push(_)
      yield _
    }
    if (_s.length === 0) {
      return
    }
    while (true) {
      yield *of(_s)
    }
  }

export default cycle