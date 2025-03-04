import generator from './generator.js'

/**
 * Converts an iterator to an iterable (generator) or returns an iterable as is.
 * This is the opposite of extracting an iterator from an iterable.
 *
 * @template T - The type of elements in the iterator or iterable
 * @param values - An iterator or iterable to convert
 * @returns The original iterable if input is already iterable, otherwise a new iterable wrapping the iterator
 *
 * @example
 * ```typescript
 * // Using with an iterator
 * const arr = [1, 2, 3];
 * const iter = arr[Symbol.iterator]();
 * const iterable = G.lift(iter);
 * // Now you can use iterable multiple times
 * const result1 = Array.from(iterable); // [1, 2, 3]
 *
 * // Using with an iterable (passes through)
 * const sameArr = G.lift(arr); // Just returns arr
 * ```
 *
 * @see generator - The underlying function used to wrap an iterator
 */
export const lift =
  <T>(values: Iterator<T> | Iterable<T>): Iterable<T> =>
    Symbol.iterator in values ?
      values as Iterable<T> :
      generator(values as Iterator<T>)

export default lift
