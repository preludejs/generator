import sort from './sort.js'
import type * as Cmp from '@prelude/cmp'

/**
 * Returns the last element from an iterable, or undefined if the iterable is empty.
 * 
 * @param values - The iterable to get the last element from
 * @returns The last element in the iterable, or undefined if empty
 */
export const maybeUnsortedLast =
  <T>(values: Iterable<T>): undefined | T => {
    let result: undefined | T = undefined
    for (const value of values) {
      result = value
    }
    return result
  }

/**
 * Creates a function that returns the last element after sorting the iterable, or undefined if empty.
 * 
 * @param cmp - The comparator function to use for sorting
 * @returns A function that takes an iterable and returns its last element after sorting, or undefined if empty
 */
export const maybeSortedLast =
  <T>(cmp: Cmp.t<T>) =>
    <U extends T>(values: Iterable<U>) =>
      maybeUnsortedLast(sort<T>(cmp)(values))

/**
 * Creates a function that returns the last element from an iterable or undefined if empty, with optional sorting.
 * If a comparator is provided, sorts the values before returning the last element.
 * Otherwise, returns the last element from the values in their original order.
 *
 * @param cmp - Optional comparator function to use for sorting
 * @returns A function that takes an iterable and returns its last element or undefined if empty
 * @see last for a variant that throws on empty iterables
 */
export const maybeLast =
  <T>(cmp?: Cmp.t<T>) =>
    cmp ?
      maybeSortedLast(cmp) :
      maybeUnsortedLast

export default maybeLast
