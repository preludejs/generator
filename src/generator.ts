/** @returns generator proxy from provided iterator. */
const generator =
  <T>(g: Iterator<T>): Generator<T> =>
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

export default generator
