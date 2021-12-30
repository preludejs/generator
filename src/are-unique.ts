const areUnique =
  <T, U>(g: Iterable<T>, f?: (value: T) => U): boolean => {
    const set = new Set<U>()
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
