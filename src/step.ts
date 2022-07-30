/** @yields values at index where modulo is zero. */
const step =
  <T>(modulo: number) =>
    function* (values: Iterable<T>): Generator<T> {
      let i = 0
      for (const value of values) {
        if (i === 0) {
          yield value
        }
        if (++i === modulo) {
          i = 0
        }
      }
    }

export default step
