import memoized from './memoized.js'

const primes_ =
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

const primes =
  memoized(primes_())

export default primes
