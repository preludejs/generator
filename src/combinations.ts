import unsafeCombinations from './unsafe-combinations.js'

/** @yields k-element combinations. */
const combinations =
  <T>(k?: number) =>
    function* (g: Iterable<T>): Generator<T[]> {
      for (const combination of unsafeCombinations<T>(k)(g)) {
        yield combination.slice()
      }
    }

export default combinations
