/**
 * Repeats `value` (or function returning `value`) `n` times.
 *
 * @example
 *   repeat(5, 'yes')
 *
 * @example
 *   repeat(5, Math.random)
 */
const repeat =
  function *<T>(n: number, valueOrFunction: T | (() => T)): Generator<T> {
    const f = typeof valueOrFunction === 'function' ?
      valueOrFunction as (() => T):
      () => valueOrFunction
    for (let i = 0; i < n; i++) {
      yield f()
    }
  }

export default repeat
