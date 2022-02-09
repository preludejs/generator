/**
 * @returns first element.
 *
 * @throws {Error} if iterable is empty.
 *
 * @see maybeFirst for non-throwing variant.
 */
const first =
  <T>(g: Iterable<T>): T => {
    for (let value of g) {
      return value
    }
    throw new Error('Not found.')
  }

export default first
