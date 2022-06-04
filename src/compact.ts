/**
 * @yields non-nullish elements.
 *
 * @see defined for filtering out `undefined` elements only.
 */
const compact =
  function* <T>(values: Iterable<T>): Generator<NonNullable<T>> {
    for (const value of values) {
      if (value != null) {
        yield value as NonNullable<T>
      }
    }
  }

export default compact
