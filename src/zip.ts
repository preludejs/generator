import type { Value } from './prelude.js'

const zip =
  function* <Args extends Iterable<unknown>[]>(...iterables: Args): Generator<{ [K in keyof Args]: Value<Args[K]> }> {
    const iterators = iterables.map(_ => _[Symbol.iterator]())
    while (true) {
      const results = iterators.map(_ => _.next())
      if (results.some(_ => _.done)) {
        break
      }
      yield results.map(_ => _.value) as { [K in keyof Args]: Value<Args[K]> }
    }
    for (const iterator of iterators) {
      iterator.return?.()
    }
  }

export default zip
