/**
 * Creates a generator that yields all values from the source iterable followed by all values from appendValues.
 *
 * @param appendValues - The values to append after the source iterable
 * @returns A generator function that takes a source iterable and yields all its values followed by appendValues
 * @yields Values from the source iterable followed by values from appendValues
 */
export const append =
  <T, U>(appendValues: Iterable<U>) =>
    function* (values: Iterable<T>): Generator<T | U> {
      for (const value of values) {
        yield value
      }
      for (const value of appendValues) {
        yield value
      }
    }

export default append
