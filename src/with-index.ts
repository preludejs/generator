/** @yields value with index */
const withIndex =
  function* <T>(values: Iterable<T>): Generator<[T, number]> {
    let index = 0
    for (const value of values) {
      yield [ value, index++ ]
    }
  }

export default withIndex
