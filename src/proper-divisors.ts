import primeFactors from './prime-factors.js'

const properDivisors =
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
