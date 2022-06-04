import of from './of.js'

/**
 * @returns infinite generator cycling through iterable values.
 *
 * Empty generator if provided iterable has no elements.
 */
const cycle =
  function* <T>(values: Iterable<T>): Generator<T> {
    const seen: T[] = []
    for (const value of values) {
      seen.push(value)
      yield value
    }
    if (seen.length === 0) {
      return
    }
    while (true) {
      yield* of(seen)
    }
  }

export default cycle
