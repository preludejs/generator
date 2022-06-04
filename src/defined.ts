import type { Defined } from './prelude.js'

/**
 * @yields defined values, `undefined` values are filtered out.
 *
 * @see compact
 */
const defined =
  function* <T>(values: Iterable<T>): Generator<Defined<T>> {
    for (const value of values) {
      if (typeof value !== 'undefined') {
        yield value as Defined<T>
      }
    }
  }

export default defined
