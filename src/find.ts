/**
 * @returns first found value that passes provided predicate.
 *
 * @throws {Error} if not found.
 *
 * @see maybeFind for non-throwing variant.
 */
const find =
  <T>(predicate: (value: T, index: number) => boolean) =>
    (values: Iterable<T>): T => {
      let index = 0
      for (const value of values) {
        if (predicate(value, index++)) {
          return value
        }
      }
      throw new Error('Not found.')
    }

export default find
