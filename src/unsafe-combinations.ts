import array from './array.js'

const unsafeCombinations =
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
