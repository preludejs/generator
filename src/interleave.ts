import type { Value } from './prelude.js'

const interleave =
  function* <Args extends Iterable<unknown>[]>(...iterables: Args): Generator<Value<Args[number]>> {
    const iterators = iterables.map(_ => _[Symbol.iterator]())
    while (true) {
      const results = iterators.map(_ => _.next())
      if (results.some(_ => _.done)) {
        break
      }
      for (const result of results) {
        yield result.value
      }
    }
    for (const iterator of iterators) {
      iterator.return?.()
    }
  }

export default interleave
