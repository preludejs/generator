
/**
 * @returns `true` if iterable has unique elements, `false` otherwise.
 *
 * Optionally mapping function from element to same-value equality key can be provided.
 */
const areUnique =
  <T, U>(g: Iterable<T>, f?: (value: T) => U): boolean => {
    const set = new Set<unknown>()
    const f_ = f ?? (_ => _)
    for (const value of g) {
      const key = f_(value)
      if (set.has(key)) {
        return false
      }
      set.add(key)
    }
    return true
  }

export default areUnique
