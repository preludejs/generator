/**
 * @returns one and only one element.
 *
 * @throws {@link Error} If there are no elements or there is more than one element.
 *
 * @see maybeSingle for 0 or 1 variant.
 */
const single =
  <T>(values: Iterable<T>): T => {
    let index = 0
    let first: undefined | T
    for (let value of values) {
      if (++index === 1) {
        first = value
        continue
      }
      throw new Error('Expected single element, got more.')
    }
    if (index === 0) {
      throw new Error('Expected single element, got none.')
    }
    return first as T
  }

export default single
