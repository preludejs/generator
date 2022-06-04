/**
 * @returns first element.
 *
 * @throws {Error} if iterable is empty.
 *
 * @see maybeFirst for non-throwing variant.
 */
const first =
  <T>(values: Iterable<T>): T => {
    for (const value of values) {
      return value
    }
    throw new Error('Not found.')
  }

export default first
