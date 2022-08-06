const findIndex =
  <T>(predicate: (value: T, index: number) => boolean) =>
    (values: Iterable<T>) => {
      let index = 0
      for (const value of values) {
        if (predicate(value, index)) {
          return index
        }
        index++
      }
      return -1
    }

export default findIndex
