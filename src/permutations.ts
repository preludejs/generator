import unsafePermutations from './unsafe-permutations.js'

const permutations =
  <T>(k?: number) =>
    function* (values: Iterable<T>): Generator<T[]> {
      for (const permutation of unsafePermutations<T>(k)(values)) {
        yield permutation.slice()
      }
    }

export default permutations
