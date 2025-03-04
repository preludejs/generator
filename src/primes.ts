import memoized from './memoized.js'

/**
 * Helper generator function that implements the Sieve of Eratosthenes algorithm
 * for generating prime numbers.
 *
 * @yields Sequential prime numbers starting from 2
 */
const aux =
  function* () {
    const map = new Map<number, number>()
    let a = 2
    while (true) {
      const b = map.get(a)
      if (b) {
        map.delete(a)
        let c = a + b
        while (map.has(c)) {
          c += b
        }
        map.set(c, b)
      } else {
        map.set(a * a, a)
        yield a
      }
      a += 1
    }
  }

/**
 * An infinite sequence of prime numbers.
 * Uses the Sieve of Eratosthenes algorithm with memoization for efficiency.
 *
 * @yields Sequential prime numbers starting from 2
 *
 * @example
 * ```ts
 * G.pipe(
 *   G.primes(),
 *   G.take(5),
 *   G.array
 * ) // [2, 3, 5, 7, 11]
 * ```
 */
export const primes =
  memoized(aux())

export default primes
