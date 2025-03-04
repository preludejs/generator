import sort from './sort.js'
import type * as Cmp from '@prelude/cmp'

/**
 * Gets the first element from an iterable without sorting, or undefined if empty.
 *
 * @template T - The type of elements in the iterable
 * @param values - The iterable to get the first element from
 * @returns The first element in the iterable, or undefined if empty
 */
const maybeUnsortedFirst =
  <T>(values: Iterable<T>): undefined | T => {
    for (const value of values) {
      return value
    }
    return undefined
  }

/**
 * Creates a function that sorts an iterable with the given comparator and returns its first element,
 * or undefined if empty.
 *
 * @template T - The type that the comparator operates on
 * @param cmp - The comparator function to use for sorting
 * @returns A function that takes an iterable, sorts it, and returns its first element or undefined
 */
const maybeSortedFirst =
  <T>(cmp: Cmp.t<T>) =>
    <U extends T>(values: Iterable<U>) =>
      maybeUnsortedFirst(sort<T>(cmp)(values))

/**
 * Creates a function that returns the first element from an iterable or undefined if empty,
 * with optional sorting.
 *
 * @template T - The type of elements in the iterable
 * @param cmp - Optional comparator function to use for sorting the iterable before getting the first element
 * @returns A function that takes an iterable and returns its first element or undefined if empty
 *
 * @example
 * ```typescript
 * // Get first element without sorting
 * const first = G.maybeFirst();
 * first([3, 1, 2]); // 3
 * first([]); // undefined
 *
 * // Get smallest element with sorting
 * const ascending = (a, b) => a - b;
 * const smallest = G.maybeFirst(ascending);
 * smallest([3, 1, 2]); // 1
 * smallest([]); // undefined
 * ```
 *
 * @see first - For a throwing variant when no elements exist
 */
export const maybeFirst =
  <T>(cmp?: Cmp.t<T>) =>
    cmp ?
      maybeSortedFirst(cmp) :
      maybeUnsortedFirst

export default maybeFirst
