/**
 * @yields non-nullish elements.
 *
 * @see defined for filtering out `undefined` elements only.
 */
const compact =
  function* <T>(g: Iterable<T>): Generator<NonNullable<T>> {
    for (const _ of g) {
      if (_ != null) {
        yield _ as NonNullable<T>
      }
    }
  }

export default compact
