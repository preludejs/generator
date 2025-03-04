/**
 * Converts an iterable to an array.
 *
 * @param values - The iterable to convert to an array
 * @returns An array containing all elements from the iterable
 */
export const array =
  <T>(values: Iterable<T>): T[] =>
    Array.from(values)

export default array
