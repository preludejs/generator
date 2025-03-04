import array from './array.js'
import type { Value } from './prelude.js'

/**
 * Creates a generator that yields all possible pairs between elements of two iterables.
 * If only one iterable is provided, it creates pairs from the same iterable.
 *
 * @template T - Type of elements in the first iterable
 * @template U - Type of the second iterable or undefined
 * @param g - Optional second iterable. If omitted, pairs are created from elements in h
 * @returns A function that takes an iterable and returns a generator of pairs
 * @yields Pairs [a, b] representing the cartesian product of the two iterables
 *
 * @example
 * // Cartesian product of two arrays
 * const pairs = [...cartesianProduct([4, 5, 6])([1, 2, 3])]
 * // Result: [[1, 4], [1, 5], [1, 6], [2, 4], [2, 5], [2, 6], [3, 4], [3, 5], [3, 6]]
 *
 * @example
 * // Cartesian product of array with itself
 * const selfPairs = [...cartesianProduct()([1, 2, 3])]
 * // Result: [[1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3], [3, 1], [3, 2], [3, 3]]
 */
export const cartesianProduct =
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
