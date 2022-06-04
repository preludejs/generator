/** @returns an array from iterable. */
const array =
  <T>(values: Iterable<T>): T[] =>
    Array.from(values)

export default array
