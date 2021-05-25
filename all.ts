const all =
  <T>(f: (value: T) => boolean, g: Iterable<T>): boolean => {
    for (const _ of g) {
      if (!f(_)) {
        return false
      }
    }
    return true
  }

export default all
