/** @returns iterator of iterable. */
const iterator =
  <T>(g: Iterable<T>): Iterator<T> =>
    g[Symbol.iterator]?.() ?? g

export default iterator
