import array from './array.js'
import take from './take.js'

const rotateBack =
  function* <T>(n: number, g: Iterable<T>): Generator<T> {
    const s = array(g)
    const m = s.length
    const n_ = m - (n % m)
    for (let i = 0; i < m; i++) {
      yield s[(n_ + i) % m]
    }
  }

const rotate =
  function* <T>(n: number, g: Iterable<T>): Generator<T> {
    if (!Number.isSafeInteger(n)) {
      throw new TypeError(`Expected rotate to be a safe integer, got ${n}.`)
    }
    if (n < 0) {
      yield *rotateBack(Math.abs(n), g)
      return
    }
    const q = array(take(n, g, false))
    const m = q.length
    let i = 0
    for (const _ of g) {
      yield _
      i++
    }
    let j = i > 0 ? 0 : m ? n % m : 0
    for (let k = 0; k < m; k++) {
      yield q[(j + k) % m]
    }
  }

export default rotate
