/** Taps into values with optional state. */
const tap =
  <T, U>(callback: (value: T, index: number, state: undefined | U) => U) =>
    function* (values: Iterable<T>): Generator<T> {
      let index = 0
      let state: undefined | U = undefined
      for (const value of values) {
        state = callback(value, index++, state)
        yield value
      }
    }

export default tap
