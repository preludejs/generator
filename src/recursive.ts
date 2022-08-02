/** @returns generator from recursively applying function to its result. */
const recursive =
  function* <T>(next: (value: T, index: number) => T, value: T, done: (previousValue: undefined | T, value: T, index: number) => boolean = () => false): Generator<T> {
    let index = 0
    let previousValue: undefined | T = undefined
    while (!done(previousValue, value, index++)) {
      yield value
      previousValue = value
      value = next(value, index) // eslint-disable-line no-param-reassign
    }
  }

export default recursive
