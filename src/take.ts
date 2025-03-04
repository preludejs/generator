/**
 * Returns a generator that yields at most the first `n` elements from the input iterable.
 *
 * @template T - The type of elements in the iterable
 * @param n - Maximum number of elements to take
 * @throws {TypeError} When n is not a safe integer
 * @returns A generator function that yields the first n elements
 * @example
 * ```ts
 * G.pipe(
 *   [1, 2, 3, 4, 5],
 *   G.take(3),
 *   G.array
 * ) // [1, 2, 3]
 * ```
 */
export const take =
  <T>(n: number) => {
    if (!Number.isSafeInteger(n)) {
      throw new TypeError(`Expected number of elements to take to be a safe integer, got ${n}.`)
    }
    return function* (values: Iterable<T>): Generator<T> {
      if (n <= 0) {
        return
      }
      let index = 0
      for (const value of values) {
        yield value
        if (++index >= n) {
          break
        }
      }
    }
  }

export default take
