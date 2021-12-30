import array from './array.js'

const cartesianProduct =
  <T, U>(g: Iterable<T>) =>
    function* (h: Iterable<U>): Generator<[U, T]> {
      const g_ = array(g)
      for (const a of h) {
        for (const b of g_) {
          yield [a, b]
        }
      }
    }

export default cartesianProduct
