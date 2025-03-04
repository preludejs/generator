/**
 * Yields values from an iterable in reversed order.
 * Note: This operation requires materializing the entire iterable into an array first.
 *
 * @template T - Element type
 * @param values - The input iterable
 * @yields Elements of the input iterable in reverse order
 *
 * @example
 * ```ts
 * G.pipe(
 *   G.range(1, 5),
 *   G.reverse,
 *   G.array
 * ) // [5, 4, 3, 2, 1]
 * ```
 */
export const reverse =
  function* <T>(values: Iterable<T>) {
    yield* Array.from(values).reverse()
  }

export default reverse
