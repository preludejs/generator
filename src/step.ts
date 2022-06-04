/** @yields values at index where modulo is zero. */
const step =
  <T>(modulo: number) =>
    function* (values: Iterable<T>): Generator<T> {
      let index = 0
      for (const value of values) {
        if (index++ % modulo === 0) {
          yield value
        }
      }
    }

export default step
