/**
 * @returns first found value that passes provided predicate.
 *
 * @throws {Error} if not found.
 *
 * @see maybeFind for non-throwing variant.
 */
const find =
  <T>(f: (value: T, index: number) => boolean) =>
    (g: Iterable<T>): T => {
      let i = 0
      for (const value of g) {
        if (f(value, i++)) {
          return value
        }
      }
      throw new Error('Not found.')
    }

export default find
