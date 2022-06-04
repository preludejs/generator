import primes from './primes.js'

/** @yields non-prime integers. */
const composites =
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
