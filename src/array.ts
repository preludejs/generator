/** @returns an array from iterable. */
const array =
  <T>(g: Iterable<T>): T[] =>
    Array.from(g)

export default array
