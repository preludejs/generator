/**
 * Creates a function that finds the first element in an iterable that satisfies a predicate.
 * Returns undefined if no element is found.
 *
 * @template T - The type of elements in the iterable
 * @param predicate - Function that tests each element; receives element and index
 * @returns A function that takes an iterable and returns the first matching element or undefined
 *
 * @example
 * ```typescript
 * // Find first even number
 * const findEven = G.maybeFind(x => x % 2 === 0);
 * findEven([1, 3, 5, 6, 7]); // 6
 * findEven([1, 3, 5, 7]); // undefined
 *
 * // Find using index
 * const findSecondItem = G.maybeFind((_, i) => i === 1);
 * findSecondItem(['a', 'b', 'c']); // 'b'
 * ```
 *
 * @see find - For a throwing variant when no element is found
 */
export const maybeFind =
  <T>(predicate: (value: T, index: number) => boolean) =>
    (values: Iterable<T>): undefined | T => {
      let index = 0
      for (const value of values) {
        if (predicate(value, index++)) {
          return value
        }
      }
      return
    }

export default maybeFind
