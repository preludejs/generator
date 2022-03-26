/** @returns generator from recursively applying function to its result. */
const recursive =
  function* <T>(f: (value: T) => T, value: T): Generator<T> {
    while (true) {
      yield value
      value = f(value) // eslint-disable-line no-param-reassign
    }
  }

export default recursive
