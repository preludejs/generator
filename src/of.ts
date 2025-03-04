import lift from './lift.js'

/**
 * Creates a generator that yields values from the input iterator or iterable.
 * Acts as a utility for creating a generator from an existing iterable or iterator.
 *
 * @param g - An iterator or iterable to convert to a generator
 * @yields Values from the input iterator or iterable
 * @returns A generator of values from the input
 */
export const of =
  function* <T>(g: Iterator<T> | Iterable<T>): Generator<T> {
    for (const value of lift(g)) {
      yield value
    }
  }

export default of
