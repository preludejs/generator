import unsafeCombinations from './unsafe-combinations.js'

/** @yields k-element combinations. */
const combinations =
  <T>(k?: number) =>
    function* (values: Iterable<T>): Generator<T[]> {
      for (const combination of unsafeCombinations<T>(k)(values)) {
        yield combination.slice()
      }
    }

export default combinations
