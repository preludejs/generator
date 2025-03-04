/**
 * Creates a generator by recursively applying a function to generate the next value.
 * Continues until the done predicate function returns true.
 *
 * @template T - Element type
 * @param next - Function that computes the next value based on current value and index
 * @param value - Initial value
 * @param done - Optional predicate function that determines when to stop (default: never stop)
 * @yields Values produced by repeatedly applying the next function
 *
 * @example
 * ```ts
 * G.pipe(
 *   G.recursive(n => n * 2, 1, (n) => n > 16),
 *   G.array
 * ) // [1, 2, 4, 8, 16]
 * ```
 */
export const recursive =
  function* <T>(next: (value: T, index: number) => T, value: T, done: (value: T, index: number, previousValue: undefined | T) => boolean = () => false): Generator<T> {
    let index = 0
    let previousValue: undefined | T = undefined
    while (!done(value, index++, previousValue)) {
      yield value
      previousValue = value
      value = next(value, index) // eslint-disable-line no-param-reassign
    }
  }

export default recursive
