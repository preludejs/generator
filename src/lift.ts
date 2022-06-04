import generator from './generator.js'

/**
 * Lifts iterator to iterable (generator), iterable is left as is.
 * An opposite of `iterator` function.
 */
const lift =
  <T>(values: Iterator<T> | Iterable<T>): Iterable<T> =>
    Symbol.iterator in values ?
      values as Iterable<T> :
      generator(values as Iterator<T>)

export default lift
