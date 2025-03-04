import unsafeCombinations from './unsafe-combinations.js'

/**
 * Creates a generator that yields all k-element combinations from an iterable.
 * This is a safe version that creates a new array for each combination.
 *
 * @template T - Type of elements in the iterable
 * @param k - Optional size of each combination. If undefined, defaults to 2
 * @returns A function that takes an iterable and returns a generator of combinations
 * @yields Arrays containing each k-element combination from the input
 *
 * @example
 * // Generate all 2-element combinations
 * const pairs = [...combinations(2)([1, 2, 3, 4])]
 * // Result: [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]
 *
 * @example
 * // Generate all 3-element combinations
 * const triplets = [...combinations(3)([1, 2, 3, 4])]
 * // Result: [[1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4]]
 *
 * @see unsafeCombinations - The underlying implementation that reuses arrays
 */
export const combinations =
  <T>(k?: number) =>
    function* (values: Iterable<T>): Generator<T[]> {
      for (const combination of unsafeCombinations<T>(k)(values)) {
        yield combination.slice()
      }
    }

export default combinations
