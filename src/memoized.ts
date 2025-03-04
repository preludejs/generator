/**
 * Creates a memoized generator function that caches values from an iterable.
 * This allows multiple iterations over the same values without recomputing them.
 * The function keeps a cache of all values produced so far, and only advances
 * the source iterator when needed to produce new values.
 *
 * @template T - The type of elements in the iterable
 * @param iterable - The source iterable to memoize
 * @returns A generator function that produces the same values as the input iterable and caches them
 * @yields The same values as the input iterable
 *
 * @example
 * ```typescript
 * // Create a memoized generator that remembers values
 * const expensive = function*() {
 *   console.log('Computing 1'); yield 1;
 *   console.log('Computing 2'); yield 2;
 *   console.log('Computing 3'); yield 3;
 * };
 *
 * const cached = G.memoized(expensive());
 *
 * // First run: logs 'Computing 1', 'Computing 2', 'Computing 3'
 * Array.from(cached()); // [1, 2, 3]
 *
 * // Second run: no logs, values come from cache
 * Array.from(cached()); // [1, 2, 3]
 *
 * // Access the cached values directly
 * console.log(cached.values); // [1, 2, 3]
 * ```
 */
export const memoized =
  <T>(iterable: Iterable<T>) => {
    const values: T[] = []
    const iterator = iterable[Symbol.iterator]()
    const f =
      function* (): Generator<T> {
        for (let index = 0; ; index++) {
          if (index === values.length) {
            const result = iterator.next()
            if (result.done) {
              break
            }
            values.push(result.value)
          }
          yield values[index]
        }
      }
    f.values = values
    return f
  }

export default memoized
