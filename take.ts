import { inspect } from 'util'
import iterator from './iterator.js'

/**
 * Takes at most `n` elements from `g`.
 * @param n Number of elements to take.
 * @param g Iterable.
 * @param done If `true` return on `g`, if `false` leave `g` open (default `true`).
 * @returns Generator yielding at most `n` elements from `g`.
 */
const take =
  function *<T>(n: number, g: Iterator<T> | Iterable<T>, done = true): Generator<T> {
    if (!Number.isSafeInteger(n)) {
      throw new TypeError(`Expected number of elements to take to be a safe integer, got ${inspect(n)}.`)
    }
    if (n < 0) {
      throw new TypeError(`Expected number of elements to take to be non negative, got ${inspect(n)}.`)
    }
    if (n === 0) {
      if (done === true) {
        throw new Error('Taking 0 elements with done = true is an absurd.')
      }
      return
    }
    const g_ = iterator(g)
    let next
    for (let i = 0; i < n; i++) {
      next = g_.next()
      if (next.done) {
        break
      }
      yield next.value
    }
    return next.done ?
      next.value :
      done ?
        g_.return?.(undefined) :
        undefined
  }

export default take
