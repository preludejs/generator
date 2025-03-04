import type { Value } from './prelude.js'

/**
 * Combines multiple iterables into a generator of tuples containing values at corresponding positions.
 * Stops when any of the input iterables is exhausted.
 *
 * @template Args - Array of iterable types
 * @param {...Args} iterables - Input iterables to zip together
 * @yields {Object} Tuple containing values from each iterable at the current position
 * @example
 * ```ts
 * G.pipe(
 *   G.zip([1, 2, 3], ['a', 'b', 'c']),
 *   G.array
 * ) // [[1, 'a'], [2, 'b'], [3, 'c']]
 *
 * // With different length iterables, stops at shortest
 * G.pipe(
 *   G.zip([1, 2], ['a', 'b', 'c']),
 *   G.array
 * ) // [[1, 'a'], [2, 'b']]
 * ```
 */
export const zip =
  function* <Args extends Iterable<unknown>[]>(...iterables: Args): Generator<{ [K in keyof Args]: Value<Args[K]> }> {
    const iterators = iterables.map(_ => _[Symbol.iterator]())
    while (true) {
      const results = iterators.map(_ => _.next())
      if (results.some(_ => _.done)) {
        break
      }
      yield results.map(_ => _.value) as { [K in keyof Args]: Value<Args[K]> }
    }
    for (const iterator of iterators) {
      iterator.return?.()
    }
  }

export default zip
