import type { Value } from './prelude.js'

const zipRecord =
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
