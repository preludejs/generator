import sort from './sort.js'
import type * as Cmp from '@prelude/cmp'

/**
 * Returns the first element from an iterable without sorting.
 *
 * @template T - Type of elements in the iterable
 * @param values - The iterable to get the first element from
 * @returns The first element in the iterable
 * @throws Error if the iterable is empty
 */
const unsortedFirst =
  <T>(values: Iterable<T>): T => {
    for (const value of values) {
      return value
    }
    throw new Error('Not found.')
  }

/**
 * Creates a function that returns the first element after sorting the iterable.
 *
 * @template T - Type of elements to compare
 * @template U - Type of elements in the iterable (extends T)
 * @param cmp - The comparator function to use for sorting
 * @returns A function that takes an iterable and returns its first element after sorting
 * @throws Error if the iterable is empty
 */
const sortedFirst =
  <T>(cmp: Cmp.t<T>) =>
    <U extends T>(values: Iterable<U>) =>
      unsortedFirst(sort<T>(cmp)(values))

/**
 * Creates a function that returns the first element from an iterable, with optional sorting.
 * If a comparator is provided, sorts the values before returning the first element.
 * Otherwise, returns the first element from the values in their original order.
 *
 * @template T - Type of elements in the iterable
 * @param cmp - Optional comparator function to use for sorting
 * @returns A function that takes an iterable and returns its first element
 * @throws Error if the iterable is empty
 *
 * @example
 * // Get first element without sorting
 * const firstElement = first()([3, 1, 4, 2, 5])
 * // Result: 3
 *
 * @example
 * // Get first element after sorting (ascending)
 * const firstSorted = first((a: number, b: number) => a - b)([3, 1, 4, 2, 5])
 * // Result: 1
 *
 * @example
 * // Get first element after sorting (descending)
 * const firstDescending = first((a: number, b: number) => b - a)([3, 1, 4, 2, 5])
 * // Result: 5
 *
 * @see maybeFirst - For a non-throwing variant that returns undefined if the iterable is empty
 */
export const first =
  <T>(cmp?: Cmp.t<T>) =>
    cmp ?
      sortedFirst(cmp) :
      unsortedFirst

export default first
