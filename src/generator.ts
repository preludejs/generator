/** @returns generator proxy from provided iterator. */
const generator =
  <T>(values: Iterator<T>): Generator<T> =>
    new Proxy(values, {
      get(target, key) {
        return key === Symbol.iterator ?
          () => this :
          target[key as keyof typeof target]
      },
      has(target, key) {
        return key === Symbol.iterator || key in target
      }
    }) as Generator<T>

export default generator
