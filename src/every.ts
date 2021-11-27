const every =
  <T>(f: (value: T, index: number) => boolean) =>
    (g: Iterable<T>): boolean => {
      let i = 0
      for (const _ of g) {
        if (!f(_, i++)) {
          return false
        }
      }
      return true
    }

export default every
