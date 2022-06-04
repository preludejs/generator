/** @returns iterator of iterable. */
const iterator =
  <T>(values: Iterable<T>): Iterator<T> =>
    values[Symbol.iterator]?.() ?? values

export default iterator
