/**
 * @yields n values produced using provided function.
 *
 * @example
 *   repeat(3, () => 'yes')
 *
 * @example
 *   repeat(5, Math.random)
 */
export const repeat =
  function* <T>(n: number, produce: () => T): Generator<T> {
    for (let i = 0; i < n; i++) {
      yield produce()
    }
  }

export default repeat
