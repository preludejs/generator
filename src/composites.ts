import primes from './primes.js'

/**
 * Creates a generator that yields composite numbers (non-prime integers).
 *
 * @yields Composite numbers in ascending order, starting from 4
 * @returns An infinite generator of composite numbers
 *
 * @example
 * // Generate the first 5 composite numbers
 * const firstFiveComposites = [...Array(5)].map(() => composites().next().value)
 * // Result: [4, 6, 8, 9, 10]
 *
 * @see primes - For generating prime numbers
 */
export const composites =
  function* () {
    let composite = 2
    for (const prime of primes()) {
      while (composite < prime) {
        yield composite++
      }
      composite++
    }
  }

export default composites
