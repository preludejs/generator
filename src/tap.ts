const tap =
  <T, U>(f: (value: T, index: number, state: undefined | U) => U) =>
    function* (g: Iterable<T>): Generator<T> {
      let index = 0
      let state: undefined | U = undefined
      for (const value of g) {
        state = f(value, index++, state)
        yield value
      }
    }

export default tap
