import array from './array.js'
import of from './of.js'
import pipe1 from './pipe1.js'
import retain from './retain.js'
import take from './take.js'

const rotateBackward =
  <T>(n: number) =>
    function* (g: Iterable<T>): Generator<T> {
      const s = array(g)
      const m = s.length
      const n_ = m - (n % m)
      for (let i = 0; i < m; i++) {
        yield s[(n_ + i) % m]
      }
    }

const rotateForward =
  <T>(n: number) =>
    function* (g: Iterable<T>): Generator<T> {
      const q = pipe1(of(g), retain, take(n), array)
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

const rotate =
  <T>(n: number) => {
    if (!Number.isSafeInteger(n)) {
      throw new TypeError(`Expected rotate to be a safe integer, got ${n}.`)
    }
    return n < 0 ?
      rotateBackward<T>(Math.abs(n)) :
      rotateForward<T>(n)
  }

export default rotate
