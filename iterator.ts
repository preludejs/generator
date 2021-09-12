/**
 * Opposite of `lift`.
 * @returns iterator of iterable or as is iterator if iterator.
 */
const iterator =
  <T>(g: Iterator<T> | Iterable<T>): Iterator<T> =>
    Symbol.iterator in g ?
      g[Symbol.iterator]() :
      g

export default iterator
