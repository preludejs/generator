/** @returns generator from recursively applying function to its result. */
const recursive =
  function* <T>(next: (value: T) => T, value: T): Generator<T> {
    while (true) {
      yield value
      value = next(value) // eslint-disable-line no-param-reassign
    }
  }

export default recursive
