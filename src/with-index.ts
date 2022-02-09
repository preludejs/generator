/**
 * Yields an index together with an element.
 * @param g Generator.
 * @returns Generator yielding an index together with an element.
 */
const withIndex =
  function* <T>(g: Iterable<T>): Generator<[T, number]> {
    let index = 0
    for (const value of g) {
      yield [ value, index++ ]
    }
  }

export default withIndex
