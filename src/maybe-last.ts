import sort from './sort.js'
import type * as Cmp from '@prelude/cmp'

export const maybeUnsortedLast =
  <T>(values: Iterable<T>): undefined | T => {
    let result: undefined | T = undefined
    for (const value of values) {
      result = value
    }
    return result
  }

export const maybeSortedLast =
  <T>(cmp: Cmp.t<T>) =>
    <U extends T>(values: Iterable<U>) =>
      maybeUnsortedLast(sort<T>(cmp)(values))

/**
 * If `cmp` is provided sorts values before returning last element, otherwise returns last element from values in order as is.
 * @yields last element
 */
export const maybeLast =
  <T>(cmp?: Cmp.t<T>) =>
    cmp ?
      maybeSortedLast(cmp) :
      maybeUnsortedLast

export default maybeLast
