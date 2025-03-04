import type { Value } from './prelude.js'

/**
 * Combines multiple iterables by alternating their elements.
 * Takes one element from each iterable in sequence, until any iterable is exhausted.
 *
 * @template Args - Array of iterable types
 * @param iterables - Multiple iterables to interleave
 * @returns A generator that yields elements from each iterable in alternating order
 * @yields Values from each iterable in sequence: first value from first iterable,
 *         first value from second iterable, etc., then second value from first iterable, and so on
 *
 * @example
 * ```typescript
 * // Interleave three iterables
 * const result = Array.from(G.interleave(
 *   [1, 2, 3],
 *   ['a', 'b', 'c'],
 *   [true, false]
 * ));
 * // [1, 'a', true, 2, 'b', false]
 * // Note: stops when shortest iterable (the boolean array) is exhausted
 * ```
 *
 * @see zip - For combining elements from multiple iterables into tuples
 */
export const interleave =
  function* <Args extends Iterable<unknown>[]>(...iterables: Args): Generator<Value<Args[number]>> {
    const iterators = iterables.map(_ => _[Symbol.iterator]())
    while (true) {
      const results = iterators.map(_ => _.next())
      if (results.some(_ => _.done)) {
        break
      }
      for (const result of results) {
        yield result.value
      }
    }
    for (const iterator of iterators) {
      iterator.return?.()
    }
  }

export default interleave
