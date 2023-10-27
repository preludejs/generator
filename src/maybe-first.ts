import sort from './sort.js'
import type * as Cmp from '@prelude/cmp'

const maybeUnsortedFirst =
  <T>(values: Iterable<T>): undefined | T => {
    for (const value of values) {
      return value
    }
    return undefined
  }

const maybeSortedFirst =
  <T>(cmp: Cmp.t<T>) =>
    <U extends T>(values: Iterable<U>) =>
      maybeUnsortedFirst(sort<T>(cmp)(values))

/**
 * If `cmp` is provided sorts values before returning first element, otherwise returns first element from values in order as is.
 *
 * @returns first element or undefined if there were no values.
 *
 * @see first for throwing variant.
 */

export const maybeFirst =
  <T>(cmp?: Cmp.t<T>) =>
    cmp ?
      maybeSortedFirst(cmp) :
      maybeUnsortedFirst

export default maybeFirst
