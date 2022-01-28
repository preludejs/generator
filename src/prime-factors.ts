import primes from './primes.js'

/** @yields naïve prime factors with exponents. */
const primeFactors =
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
