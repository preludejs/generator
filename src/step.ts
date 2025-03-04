/**
 * Returns a generator that yields every nth element from the input iterable.
 * The first element is always included.
 *
 * @template T - The type of elements in the iterable
 * @param modulo - The step size (every nth element)
 * @yields Elements at positions where the index modulo equals zero
 * @example
 * ```ts
 * G.pipe(
 *   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
 *   G.step(3),
 *   G.array
 * ) // [1, 4, 7, 10]
 * ```
 */
export const step =
  <T>(modulo: number) =>
    function* (values: Iterable<T>): Generator<T> {
      let i = 0
      for (const value of values) {
        if (i === 0) {
          yield value
        }
        if (++i === modulo) {
          i = 0
        }
      }
    }

export default step
