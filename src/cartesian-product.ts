import array from './array.js'
import type { Value } from './prelude.js'

/** @yields cartesian product pairs. */
const cartesianProduct =
  <T, U extends undefined | Iterable<unknown>>(g?: U) =>
    function* (h: Iterable<T>): Generator<[T, U extends undefined ? T : Value<U>]> {
      const g_ = array(g ?? h)
      const h_ = g ? h : g_
      for (const a of h_) {
        for (const b of g_) {
          yield [a, b] as [T, U extends undefined ? T : Value<U>]
        }
      }
    }

export default cartesianProduct
