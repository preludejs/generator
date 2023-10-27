import sort from './sort.js'
import type * as Cmp from '@prelude/cmp'

export const unsortedLast =
  <T>(values: Iterable<T>): T => {
    let result: undefined | T = undefined
    let found = false
    for (const value of values) {
      result = value
      found = true
    }
    if (!found) {
      throw new Error('Not found.')
    }
    return result as T
  }

export const sortedLast =
  <T>(cmp: Cmp.t<T>) =>
    <U extends T>(values: Iterable<U>) =>
      unsortedLast(sort<T>(cmp)(values))

/**
 * If `cmp` is provided sorts values before returning last element, otherwise returns last element from values in order as is.
 * @yields last element
 */
export const last =
  <T>(cmp?: Cmp.t<T>) =>
    cmp ?
      sortedLast(cmp) :
      unsortedLast

export default last
