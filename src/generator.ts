/**
 * Creates a Generator proxy from an Iterator by adding the Symbol.iterator property.
 * This allows any Iterator to be used where a Generator is expected.
 *
 * @template T - Type of elements in the iterator
 * @param values - The Iterator to wrap as a Generator
 * @returns A Generator proxy for the input iterator
 *
 * @example
 * // Convert a Map iterator to a Generator
 * const map = new Map([['a', 1], ['b', 2], ['c', 3]])
 * const gen = generator(map.entries())
 * const entriesArray = [...gen]
 * // Result: [['a', 1], ['b', 2], ['c', 3]]
 *
 * @example
 * // Make a custom iterator work as a Generator
 * const iter = {
 *   value: 0,
 *   next() {
 *     return this.value < 5
 *       ? { value: this.value++, done: false }
 *       : { value: undefined, done: true }
 *   }
 * }
 * const gen = generator(iter)
 * const values = [...gen]
 * // Result: [0, 1, 2, 3, 4]
 */
export const generator =
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
