import type { Defined } from './prelude.js'

/**
 * @yields defined values, `undefined` values are filtered out.
 *
 * @see compact
 */
const defined =
  function* <T>(g: Iterable<T>): Generator<Defined<T>> {
    for (const _ of g) {
      if (typeof _ !== 'undefined') {
        yield _ as Defined<T>
      }
    }
  }

export default defined
