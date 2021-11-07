/**
 * Repeats `value` returned from `f` function `n` times.
 *
 * @example
 *   repeat(3, () => 'yes')
 *
 * @example
 *   repeat(5, Math.random)
 */
const repeat =
  function *<T>(n: number, f: () => T): Generator<T> {
    for (let i = 0; i < n; i++) {
      yield f()
    }
  }

export default repeat
