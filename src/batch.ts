/**
 * Creates a generator that groups values from an iterable into batches of a specified size.
 *
 * @param n - The size of each batch
 * @returns A function that takes an iterable and returns a generator
 * @yields Arrays of elements, with each array containing up to n elements
 *         The last batch may have fewer than n elements (between 1 and n)
 *
 * @example
 * // Group an array into batches of 3
 * const batchedValues = [...batch(3)([1, 2, 3, 4, 5, 6, 7])]
 * // Result: [[1, 2, 3], [4, 5, 6], [7]]
 */
export const batch =
  (n: number) =>
    function* <T>(values: Iterable<T>): Generator<T[]> {
      let range: T[] = []
      for (const value of values) {
        if (range.push(value) >= n) {
          yield range
          range = []
        }
      }
      if (range.length > 0) {
        yield range
      }
    }

export default batch
