/**
 * Creates a generator that yields a single value.
 *
 * @template T - Type of the value to yield
 * @param {T} value - The value to yield
 * @yields {T} The provided value
 * @example
 * ```ts
 * const result = G.pipe(
 *   G.yield_(42),
 *   G.array
 * );
 * // => [42]
 * ```
 */
const yield_ =
  function* <T>(value: T): Generator<T> {
    yield value
  }

export { yield_ as yield }

export default yield_
