/**
 * Lifts iterator to iterable (generator), iterable is left as is.
 * An opposite of `iterator` function.
 */
const lift =
  <T>(g: Iterator<T> | Iterable<T>): Iterable<T> =>
    Symbol.iterator in g ?
      g as Iterable<T> :
      new Proxy(g, {
        get(target, key) {
          return key === Symbol.iterator ?
            () => this :
            target[key]
        },
        has(target, key) {
          return key === Symbol.iterator || key in target
        }
      }) as Generator<T>

export default lift
