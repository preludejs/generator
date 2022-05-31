/**
 * @returns first element or `undefined` if there are no elements.
 *
 * @throws {@link Error} if there are more than one elements.
 *
 * @see single for one and only one variant.
 */
const maybeSingle =
  <T>(values: Iterable<T>): undefined | T => {
    let index = 0
    let first: undefined | T
    for (let value of values) {
      if (++index === 1) {
        first = value
        continue
      }
      throw new Error('Expected no elements or a single element, got more.')
    }
    return first
  }

export default maybeSingle
