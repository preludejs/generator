
/**
 * @returns `true` if iterable has unique elements, `false` otherwise.
 *
 * Optionally mapping function from element to same-value equality key can be provided.
 */
const areUnique =
  <T, U>(values: Iterable<T>, maybeKeyOfValue?: (value: T) => U): boolean => {
    const set = new Set<unknown>()
    const keyOfValue = maybeKeyOfValue ?? (_ => _)
    for (const value of values) {
      const key = keyOfValue(value)
      if (set.has(key)) {
        return false
      }
      set.add(key)
    }
    return true
  }

export default areUnique
