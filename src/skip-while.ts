/**
 * Returns a generator that skips elements as long as they satisfy the predicate,
 * then yields all remaining elements.
 *
 * @template T - The type of elements in the iterable
 * @param predicate - Function to test each element with its index
 * @yields Elements after the first element that fails the predicate test
 * @example
 * ```ts
 * G.pipe(
 *   [1, 2, 3, 4, 1, 2],
 *   G.skipWhile(x => x < 3),
 *   G.array
 * ) // [3, 4, 1, 2]
 * ```
 */
export const skipWhile =
  <T>(predicate: (value: T, index: number) => boolean) =>
    function* (values: Iterable<T>): Generator<T> {
      let yielding = false
      let index = 0
      for (const value of values) {
        if ((yielding = yielding || !predicate(value, index++))) {
          yield value
        }
      }
    }

export default skipWhile
