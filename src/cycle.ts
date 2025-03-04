import of from './of.js'

/**
 * Creates an infinite generator that repeatedly cycles through the values of an iterable.
 * If the input iterable is empty, returns an empty generator.
 *
 * @template T - Type of elements in the iterable
 * @param values - The source iterable to cycle through
 * @yields Values from the source iterable, repeatedly cycling through them indefinitely
 * @returns An infinite generator that cycles through the input values
 *
 * @example
 * // Create a cycling generator of numbers
 * const cycled = cycle([1, 2, 3])
 * const first6Values = []
 * for (let i = 0; i < 6; i++) {
 *   first6Values.push(cycled.next().value)
 * }
 * // Result: [1, 2, 3, 1, 2, 3]
 *
 * @example
 * // Create a cycling generator from a string
 * const letters = cycle("ABC")
 * const first5Values = []
 * for (let i = 0; i < 5; i++) {
 *   first5Values.push(letters.next().value)
 * }
 * // Result: ['A', 'B', 'C', 'A', 'B']
 */
export const cycle =
  function* <T>(values: Iterable<T>): Generator<T> {
    const seen: T[] = []
    for (const value of values) {
      seen.push(value)
      yield value
    }
    if (seen.length === 0) {
      return
    }
    while (true) {
      yield* of(seen)
    }
  }

export default cycle
