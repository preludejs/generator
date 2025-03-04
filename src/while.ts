
/**
 * Creates a generator that yields values from the source iterable as long as the predicate returns true.
 *
 * @template T - The type of elements in the source iterable.
 * @param predicate - Function that tests each element and its index, returning a boolean.
 * @returns A generator function that takes an iterable and yields elements until the predicate returns false.
 * @yields Elements from the source iterable as long as the predicate returns true.
 *
 * @example
 * ```ts
 * G.pipe(
 *   [1, 2, 3, 4, 5, 1, 2],
 *   G.while_(x => x < 4),
 *   G.array
 * ) // [1, 2, 3]
 * ```
 */
const while_ =
  <T>(predicate: (value: T, index: number) => boolean) =>
    function* (values: Iterable<T>): Generator<T> {
      let index = 0
      for (const value of values) {
        if (!predicate(value, index++)) {
          break
        }
        yield value
      }
    }

export { while_  as while }

export default while_
