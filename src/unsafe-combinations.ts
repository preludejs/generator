import array from './array.js'

/**
 * Returns a generator that yields all combinations of the input iterable.
 * WARNING: This loads the entire input iterable into memory, which can be unsafe
 * for large collections. For a safer version with constrained memory usage,
 * use combinations.ts.
 *
 * @template T - The type of elements in the iterable
 * @param k - Optional size of each combination (defaults to the length of the input)
 * @yields All possible combinations as arrays
 * @example
 * ```ts
 * G.pipe(
 *   [1, 2, 3],
 *   G.unsafeCombinations(2),
 *   G.array
 * ) // [[1, 2], [1, 3], [2, 3]]
 *
 * G.pipe(
 *   [1, 2, 3, 4],
 *   G.unsafeCombinations(3),
 *   G.array
 * ) // [[1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4]]
 * ```
 */
export const unsafeCombinations =
  <T>(k?: number) =>
    function* (g: Iterable<T>): Generator<T[]> {
      const values = array(g)
      const k_ = k ?? values.length
      const n = values.length
      const combination: T[] = []
      const aux =
        function* (from: number, index: number): Generator<T[]> {
          if (index === k_) {
            yield combination
            return
          }
          for (let i = from; i <= n - 1 && n - i >= k_ - index; i++) {
            combination[index] = values[i]
            yield* aux(i + 1, index + 1)
          }
        }
      yield* aux(0, 0)
    }

export default unsafeCombinations
