import lift from './lift.js'

const array =
  <T>(g: Iterator<T> | Iterable<T>): T[] =>
    Array.from(lift(g))

export default array
