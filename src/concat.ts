import type { Value } from './prelude.js'

/**
 * Creates a generator that concatenates multiple iterables into a single sequence.
 *
 * @template Args - Array of iterable types
 * @param iterables - One or more iterables to concatenate
 * @yields Values from each provided iterable in sequence
 * @returns A generator that yields all values from the input iterables
 *
 * @example
 * // Concatenate multiple arrays
 * const result = [...concat([1, 2], [3, 4], [5, 6])]
 * // Result: [1, 2, 3, 4, 5, 6]
 *
 * @example
 * // Concatenate different iterable types
 * const result = [...concat([1, 2], new Set([3, 4]), "56")]
 * // Result: [1, 2, 3, 4, '5', '6']
 */
export const concat =
  function* <Args extends Iterable<unknown>[]>(...iterables: Args): Generator<Value<Args[number]>> {
    for (const iterable of iterables) {
      for (const value of iterable) {
        yield value as Value<Args[number]>
      }
    }
  }

export default concat
