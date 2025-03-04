/**
 * Finds both the minimum and maximum values in an iterable based on a comparison function.
 *
 * @template T - Type of elements in the iterable
 * @param f - Comparison function that returns a number (negative if a < b, 0 if a = b, positive if a > b)
 * @returns A function that takes an iterable and returns an object with min and max properties,
 *          or undefined if the iterable is empty
 *
 * @example
 * // Find min and max numbers
 * const result = extreme((a, b) => a - b)([3, 1, 4, 1, 5, 9, 2, 6])
 * // Result: { min: 1, max: 9 }
 *
 * @example
 * // Find min and max string lengths
 * const result = extreme((a, b) => a.length - b.length)(["apple", "banana", "kiwi", "strawberry"])
 * // Result: { min: "kiwi", max: "strawberry" }
 *
 * @example
 * // With an empty iterable
 * const result = extreme((a, b) => a - b)([])
 * // Result: undefined
 */
export const extreme =
  <T>(f: (a: T, b: T) => number) =>
    (values: Iterable<T>) => {
      const iterator = values[Symbol.iterator]()
      let next = iterator.next()
      if (next.done) {
        return
      }
      const result = {
        min: next.value,
        max: next.value
      }
      for (; !next.done; next = iterator.next()) {
        if (f(result.max, next.value) < 0) {
          result.max = next.value
        }
        if (f(result.min, next.value) > 0) {
          result.min = next.value
        }
      }
      iterator.return?.()
      return result
    }

export default extreme
