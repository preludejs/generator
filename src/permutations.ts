import unsafePermutations from './unsafe-permutations.js'

const permutations =
  <T>(k?: number) =>
    function* (g: Iterable<T>): Generator<T[]> {
      for (const permutation of unsafePermutations<T>(k)(g)) {
        yield permutation.slice()
      }
    }

export default permutations
