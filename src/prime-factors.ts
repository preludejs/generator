import primes from './primes.js'

/**
 * Generates prime factorization of a number.
 * Returns pairs of [prime, exponent] representing factors in the form prime^exponent.
 *
 * @param value - The number to factorize
 * @yields Pairs of [prime, exponent] representing prime factors
 * @returns Empty array for invalid inputs (non-positive or non-integer values)
 *
 * @example
 * ```ts
 * G.pipe(
 *   G.primeFactors(60),
 *   G.array
 * ) // [[2, 2], [3, 1], [5, 1]] (representing 2^2 * 3^1 * 5^1)
 * ```
 */
export const primeFactors =
  function* (value: number): Generator<[prime: number, exponent: number]> {
    if (value <= 0 || !Number.isSafeInteger(value)) {
      return []
    }
    for (const prime of primes()) {
      let exponent = 0
      while (value % prime === 0) {
        value /= prime
        exponent++
      }
      if (exponent > 0) {
        yield [ prime, exponent ]
      }
      if (value <= 1) {
        break
      }
    }
  }

export default primeFactors
