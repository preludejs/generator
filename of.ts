import lift from './lift.js'

const of =
  function *<T>(g: Iterator<T> | Iterable<T>): Generator<T> {
    for (const value of lift(g)) {
      yield value
    }
  }

export default of
