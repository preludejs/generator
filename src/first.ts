import sort from './sort.js'
import type * as Cmp from '@prelude/cmp'

const unsortedFirst =
  <T>(values: Iterable<T>): T => {
    for (const value of values) {
      return value
    }
    throw new Error('Not found.')
  }

const sortedFirst =
  <T>(cmp: Cmp.t<T>) =>
    <U extends T>(values: Iterable<U>) =>
      unsortedFirst(sort<T>(cmp)(values))

/**
 * If `cmp` is provided sorts values before returning first element, otherwise returns first element from values in order as is.
 *
 * @returns first element.
 *
 * @throws {Error} if iterable is empty.
 *
 * @see maybeFirst for non-throwing variant.
 */

export const first =
  <T>(cmp?: Cmp.t<T>) =>
    cmp ?
      sortedFirst(cmp) :
      unsortedFirst

export default first
