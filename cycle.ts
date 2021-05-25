import of from './of'

const cycle =
  function *<T>(g: Iterable<T>): Generator<T> {
    const values: T[] = []
    for (const value of g) {
      values.push(value)
      yield value
    }
    while (true) {
      yield *of(values)
    }
  }

export default cycle
