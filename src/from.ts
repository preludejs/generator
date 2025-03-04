/**
 * Creates an infinite generator that yields a sequence of numbers starting from a given value.
 * Similar to Python's range() function, but produces an infinite sequence.
 *
 * @param first - The starting value (inclusive), defaults to 0
 * @param step - The step value to increment by, defaults to 1
 * @yields A sequence of numbers, starting from first and incrementing by step
 * @returns An infinite generator of numbers
 *
 * @example
 * // Generate numbers starting from 0 with default step of 1
 * const counter = from()
 * const first5 = Array.from({ length: 5 }, () => counter.next().value)
 * // Result: [0, 1, 2, 3, 4]
 *
 * @example
 * // Generate numbers starting from 10 with step of 5
 * const byFives = from(10, 5)
 * const first4 = Array.from({ length: 4 }, () => byFives.next().value)
 * // Result: [10, 15, 20, 25]
 *
 * @example
 * // Generate a decreasing sequence with negative step
 * const countdown = from(10, -1)
 * const first6 = Array.from({ length: 6 }, () => countdown.next().value)
 * // Result: [10, 9, 8, 7, 6, 5]
 */
export const from =
  function* (first = 0, step = 1): Generator<number> {
    for (let value = first; ; value += step) {
      yield value
    }
  }

export default from
