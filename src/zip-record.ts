import type { Value } from './prelude.js'

/**
 * Creates a generator that yields objects where each property comes from the corresponding position in the input iterables.
 * Stops when any of the input iterables is exhausted.
 *
 * @template Arg - Type of the input record of iterables
 * @param {Arg} iterables - Record of iterables to zip
 * @yields {Object} Object with the same keys as the input, where each value comes from the corresponding iterable
 * @example
 * ```ts
 * const names = ['Alice', 'Bob', 'Charlie'];
 * const ages = [25, 30, 35];
 *
 * const records = G.pipe(
 *   G.zipRecord({ name: names, age: ages }),
 *   G.array
 * );
 * // => [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, { name: 'Charlie', age: 35 }]
 * ```
 */
export const zipRecord =
  function* <Arg extends { [key: string]: Iterable<unknown> }>(iterables: Arg): Generator<{ [K in keyof Arg]: Value<Arg[K]> }> {
    const keys = Object.keys(iterables)
    const iterators = keys.map(_ => iterables[_][Symbol.iterator]())
    while (true) {
      const results = iterators.map(_ => _.next())
      if (results.some(_ => _.done)) {
        break
      }
      yield Object.fromEntries(keys.map((_, i) => [ _, results[i].value ])) as { [K in keyof Arg]: Value<Arg[K]> }
    }
    for (const iterator of iterators) {
      iterator.return?.()
    }
  }

export default zipRecord
