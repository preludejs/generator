
/**
 * Checks if all elements in the iterable are unique according to their values or a derived key.
 *
 * @param values - The iterable to check for uniqueness
 * @param maybeKeyOfValue - Optional function to extract a key for uniqueness comparison (identity is used if not provided)
 * @returns `true` if all elements are unique, `false` if duplicates exist
 */
export const areUnique =
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
