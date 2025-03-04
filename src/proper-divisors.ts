import primeFactors from './prime-factors.js'

/**
 * Generates all proper divisors of a number (divisors that are less than n).
 * A proper divisor of n is any positive integer that divides n evenly, except for n itself.
 *
 * @param n - The number to find proper divisors for
 * @yields Each proper divisor of n in ascending order
 *
 * @example
 * ```ts
 * G.pipe(
 *   G.properDivisors(12),
 *   G.array
 * ) // [1, 2, 3, 4, 6]
 * ```
 */
export const properDivisors =
  function* (n: number) {
    if (n <= 1) {
      return
    }
    const divisors = [1]
    yield 1
    for (const [ prime, exponent ] of primeFactors(n)) {
      const m = divisors.length
      let factor = 1
      for (let e = 1; e <= exponent; e++) {
        factor *= prime
        for (let i = 0; i < m; i++) {
          const divisor = divisors[i] * factor
          if (divisor < n) {
            yield divisor
            divisors.push(divisor)
          }
        }
      }
    }
  }

export default properDivisors
