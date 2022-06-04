import type { Iterated } from './prelude.js'

/** @yields values from provided iterables. */
const concat =
  function* <Gs extends Iterable<unknown>[]>(...valuesArray: Gs): Generator<Iterated<Gs[number]>> {
    for (const values of valuesArray) {
      for (const value of values) {
        yield value as Iterated<Gs[number]>
      }
    }
  }

export default concat
