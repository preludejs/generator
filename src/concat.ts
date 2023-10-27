import type { Value } from './prelude.js'

/** @yields values from provided iterables. */
const concat =
  function* <Args extends Iterable<unknown>[]>(...iterables: Args): Generator<Value<Args[number]>> {
    for (const iterable of iterables) {
      for (const value of iterable) {
        yield value as Value<Args[number]>
      }
    }
  }

export default concat
