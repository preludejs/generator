const count =
  <T>(f: (value: T, index: number) => boolean = () => true) =>
    (g: Iterable<T>): number => {
      let count_ = 0
      let index = 0
      for (const value of g) {
        if (f(value, index++)) {
          count_++
        }
      }
      return count_
    }

export default count
