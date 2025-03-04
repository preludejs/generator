/**
 * Creates a generator that yields values from the source iterable until the predicate returns true.
 *
 * @template T - The type of elements in the source iterable.
 * @param predicate - Function that tests each element and its index, returning a boolean.
 * @returns A generator function that takes an iterable and yields elements until the predicate returns true.
 * @yields Elements from the source iterable until the predicate returns true (exclusive).
 *
 * @example
 * ```ts
 * G.pipe(
 *   [1, 2, 3, 4, 5, 1, 2],
 *   G.until(x => x > 3),
 *   G.array
 * ) // [1, 2, 3]
 * ```
 */
export const until =
  <T>(predicate: (value: T, index: number) => boolean) =>
    function* (values: Iterable<T>): Generator<T> {
      let index = 0
      for (const value of values) {
        if (predicate(value, index++)) {
          break
        }
        yield value
      }
    }

export default until
