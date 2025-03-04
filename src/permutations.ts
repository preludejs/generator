import unsafePermutations from './unsafe-permutations.js'

/**
 * Creates a generator that yields all possible permutations of k elements from the source iterable.
 * Permutations are returned as new arrays (safe copies).
 *
 * @param k - Optional number of elements to use in each permutation. If not provided, all elements are used.
 * @returns A generator function that takes an iterable and yields all k-length permutations
 * @yields Arrays containing permutations of elements from the source iterable
 * @see unsafePermutations for a variant that doesn't copy arrays (more efficient but mutates)
 */
export const permutations =
  <T>(k?: number) =>
    function* (values: Iterable<T>): Generator<T[]> {
      for (const permutation of unsafePermutations<T>(k)(values)) {
        yield permutation.slice()
      }
    }

export default permutations
