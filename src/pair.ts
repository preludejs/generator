/**
 * Creates a generator that yields pairs of values from two iterables.
 * Stops when either iterable is exhausted.
 *
 * @template A Type of values in the left iterable
 * @template B Type of values in the right iterable
 * @param rhsIterable The right-hand side iterable
 * @returns A function that takes a left-hand side iterable and yields pairs
 * @yields Pairs of values from both iterables as [A, B] arrays
 *
 * @example
 * ```ts
 * G.pipe(
 *   [1, 2, 3],
 *   G.pair(['a', 'b', 'c']),
 *   G.array
 * ) // [[1, 'a'], [2, 'b'], [3, 'c']]
 *
 * // With different length iterables, stops at the shorter one
 * G.pipe(
 *   [1, 2, 3, 4, 5],
 *   G.pair(['a', 'b', 'c']),
 *   G.array
 * ) // [[1, 'a'], [2, 'b'], [3, 'c']]
 * ```
 */
export const pair =
  <A, B>(rhsIterable: Iterable<B>) =>
    function* (lhsIterable: Iterable<A>): Generator<[ A, B ]> {
      const lhsIterator = lhsIterable[Symbol.iterator]()
      const rhsIterator = rhsIterable[Symbol.iterator]()
      while (true) {
        const lhsResult = lhsIterator.next()
        const rhsResult = rhsIterator.next()
        if (lhsResult.done || rhsResult.done) {
          break
        }
        yield [ lhsResult.value, rhsResult.value ]
      }
      lhsIterator.return?.()
      rhsIterator.return?.()
    }

export default pair
