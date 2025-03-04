import array from './array.js'

/**
 * Returns a generator that yields all permutations of the input iterable.
 * WARNING: This loads the entire input iterable into memory, which can be unsafe
 * for large collections. For a safer version with constrained memory usage,
 * use combinations.ts.
 *
 * @template T - The type of elements in the iterable
 * @param k - Optional length of each permutation (defaults to the length of the input)
 * @yields All possible permutations as arrays
 * @example
 * ```ts
 * G.pipe(
 *   [1, 2, 3],
 *   G.unsafePermutations(),
 *   G.array
 * ) // [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
 *
 * G.pipe(
 *   [1, 2, 3],
 *   G.unsafePermutations(2),
 *   G.array
 * ) // [[1, 2], [1, 3], [2, 1], [2, 3], [3, 1], [3, 2]]
 * ```
 */
export const unsafePermutations =
  <T>(k?: number) =>
    function* (g: Iterable<T>): Generator<T[]> {
      const values = array(g)
      const k_ = k ?? values.length
      const permutation: T[] = []
      const collected: boolean[] = []
      const aux =
        function* (j: number): Generator<T[]> {
          if (j === k_) {
            yield permutation
            return
          }
          for (let i = 0; i < values.length; i++) {
            if (!collected[i]) {
              collected[i] = true
              permutation[j] = values[i]
              yield* aux(j + 1)
              collected[i] = false
            }
          }
        }
      yield* aux(0)
    }

export default unsafePermutations
