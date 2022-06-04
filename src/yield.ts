/** @yields single value. */
const yield_ =
  function* <T>(value: T): Generator<T> {
    yield value
  }

export default yield_
