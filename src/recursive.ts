/** @returns generator from recursively applying function to its result. */
const recursive =
  function* <T>(next: (value: T, index: number) => T, value: T, done: (value: T, index: number, previousValue: undefined | T) => boolean = () => false): Generator<T> {
    let index = 0
    let previousValue: undefined | T = undefined
    while (!done(value, index++, previousValue)) {
      yield value
      previousValue = value
      value = next(value, index) // eslint-disable-line no-param-reassign
    }
  }

export default recursive
