import sort from './sort.js'
import type * as Cmp from '@prelude/cmp'

/**
 * Returns the last element from an iterable.
 * 
 * @param values - The iterable to get the last element from
 * @returns The last element in the iterable
 * @throws Error if the iterable is empty
 */
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

/**
 * Creates a function that returns the last element after sorting the iterable.
 * 
 * @param cmp - The comparator function to use for sorting
 * @returns A function that takes an iterable and returns its last element after sorting
 */
export const sortedLast =
  <T>(cmp: Cmp.t<T>) =>
    <U extends T>(values: Iterable<U>) =>
      unsortedLast(sort<T>(cmp)(values))

/**
 * Creates a function that returns the last element from an iterable, with optional sorting.
 * If a comparator is provided, sorts the values before returning the last element.
 * Otherwise, returns the last element from the values in their original order.
 *
 * @param cmp - Optional comparator function to use for sorting
 * @returns A function that takes an iterable and returns its last element
 * @throws Error if the iterable is empty
 * @see maybeLast for a non-throwing variant
 */
export const last =
  <T>(cmp?: Cmp.t<T>) =>
    cmp ?
      sortedLast(cmp) :
      unsortedLast

export default last
