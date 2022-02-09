import type { Iterated } from './prelude.js'

/** @yields values from provided iterables. */
const concat =
  function* <Gs extends Iterable<unknown>[]>(...gs: Gs): Generator<Iterated<Gs[number]>> {
    for (const g of gs) {
      for (const value of g) {
        yield value as Iterated<Gs[number]>
      }
    }
  }

export default concat
