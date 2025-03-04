import type * as Cmp from '@prelude/cmp'

/**
 * Returns a generator that yields elements from the input iterable in sorted order.
 *
 * @template T - The type of elements in the iterable
 * @param cmp - The comparison function to determine sort order
 * @yields Elements from the input iterable in sorted order
 * @example
 * ```ts
 * G.pipe(
 *   [3, 1, 4, 1, 5],
 *   G.sort((a, b) => a - b),
 *   G.array
 * ) // [1, 1, 3, 4, 5]
 * ```
 */
export const sort =
  <T>(cmp: Cmp.t<T>) =>
    function* (values: Iterable<T>) {
      yield* Array.from(values).sort(cmp)
    }

export default sort
