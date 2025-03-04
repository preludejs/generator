import array from './array.js'
import of from './of.js'
import pipe from './pipe.js'
import retain from './retain.js'
import take from './take.js'

/**
 * Helper function to rotate values backward by n positions
 *
 * @template T - Element type
 * @param n - Number of positions to rotate backward
 * @yields Elements from the input iterable rotated backward by n positions
 */
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

/**
 * Helper function to rotate values forward by n positions
 *
 * @template T - Element type
 * @param n - Number of positions to rotate forward
 * @yields Elements from the input iterable rotated forward by n positions
 */
const rotateForward =
  <T>(n: number) =>
    function* (g: Iterable<T>): Generator<T> {
      const q = pipe(of(g), retain, take(n), array)
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

/**
 * Creates a generator that rotates elements in an iterable by n positions.
 * Positive values rotate forward, negative values rotate backward.
 *
 * @template T - Element type
 * @param n - Number of positions to rotate (positive for forward, negative for backward)
 * @throws {TypeError} If n is not a safe integer
 * @yields Elements from the input iterable rotated by n positions
 *
 * @example
 * ```ts
 * G.pipe(
 *   G.range(1, 5),
 *   G.rotate(2),
 *   G.array
 * ) // [4, 5, 1, 2, 3]
 * ```
 */
export const rotate =
  <T>(n: number) => {
    if (!Number.isSafeInteger(n)) {
      throw new TypeError(`Expected rotate to be a safe integer, got ${n}.`)
    }
    return n < 0 ?
      rotateBackward<T>(Math.abs(n)) :
      rotateForward<T>(n)
  }

export default rotate
