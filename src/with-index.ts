/**
 * Yields an index together with an element.
 * @param g Generator.
 * @returns Generator yielding an index together with an element.
 */
const withIndex =
  function *<T>(g: Iterable<T>): Generator<[T, number]> {
    let i = 0
    for (const _ of g) {
      yield [ _, i++ ]
    }
  }

export default withIndex