import type { IterableResult } from './prelude.js'

export const combine =
  function* <Gs extends Iterable<unknown>[]>(...gs: Gs): Generator<{ [K in keyof Gs]: IterableResult<Gs[K]> }> {
    const iterators = gs.map(_ => _[Symbol.iterator]())
    while (true) {
      const iteratorResults = iterators.map(_ => _.next())
      if (iteratorResults.some(_ => _.done)) {
        break
      }
      yield iteratorResults.map(_ => _.value) as { [K in keyof Gs]: IterableResult<Gs[K]> }
    }
    for (const iterator of iterators) {
      iterator.return?.()
    }
  }

export default combine
