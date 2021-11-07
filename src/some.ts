import lift from './lift.js'

/** @returns `true` if at least one `f`-predicate returns `true`, `false` otherwise. */
const some =
  <T>(g: Iterator<T> | Iterable<T>, f: (value: T, index: number) => boolean): boolean => {
    let i = 0
    for (const _ of lift(g)) {
      if (f(_, i++)) {
        return true
      }
    }
    return false
  }

export default some
