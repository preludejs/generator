import primes from './primes.js'

/** @yields non-prime integers. */
const composites =
  function* () {
    let i = 2
    for (const prime of primes()) {
      while (i < prime) {
        yield i++
      }
      i++
    }
  }

export default composites
