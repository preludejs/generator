/**
 * Creates a generator that yields the same values as the source iterable but allows side effects via a callback function.
 * The callback can maintain state between iterations.
 *
 * @template T - The type of elements in the source iterable.
 * @template U - The type of the optional state maintained by the callback.
 * @param callback - Function called for each element, receiving the element, its index, and the current state.
 *                   The return value becomes the new state for the next iteration.
 * @returns A generator function that takes an iterable and yields the same elements while executing the callback.
 * @yields The same elements as the source iterable, unchanged.
 *
 * @example
 * ```ts
 * // Log values while passing them through
 * G.pipe(
 *   [1, 2, 3],
 *   G.tap(x => console.log(x)),
 *   G.array
 * ) // [1, 2, 3] (with side effect: logs 1, 2, 3)
 *
 * // Maintain a count while passing values through
 * G.pipe(
 *   [1, 2, 3],
 *   G.tap((x, i, sum = 0) => sum + x),
 *   G.array
 * ) // [1, 2, 3] (while calculating sum = 6 as state)
 * ```
 */
export const tap =
  <T, U>(callback: (value: T, index: number, state: undefined | U) => U) =>
    function* (values: Iterable<T>): Generator<T> {
      let index = 0
      let state: undefined | U = undefined
      for (const value of values) {
        state = callback(value, index++, state)
        yield value
      }
    }

export default tap
