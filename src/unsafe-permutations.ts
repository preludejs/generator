import array from './array.js'

const unsafePermutations =
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
