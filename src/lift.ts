import generator from './generator.js'

/**
 * Lifts iterator to iterable (generator), iterable is left as is.
 * An opposite of `iterator` function.
 */
const lift =
  <T>(g: Iterator<T> | Iterable<T>): Iterable<T> =>
    Symbol.iterator in g ?
      g as Iterable<T> :
      generator(g as Iterator<T>)

export default lift
