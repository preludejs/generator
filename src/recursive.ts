/** @returns generator from recursively applying function to its result. */
const recursive =
  function* <T>(next: (value: T, index: number) => T, value: T): Generator<T> {
    let index = 1
    while (true) {
      yield value
      value = next(value, index++) // eslint-disable-line no-param-reassign
    }
  }

export default recursive
