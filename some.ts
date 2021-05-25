const some =
  <T>(f: (value: T) => boolean, g: Iterable<T>): boolean => {
    for (const _ of g) {
      if (f(_)) {
        return true
      }
    }
    return false
  }

export default some
