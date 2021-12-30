const skipWhile =
  <T>(f: (value: T, index: number) => boolean) =>
    function* (g: Iterable<T>): Generator<T> {
      let yield_ = false
      let index = 0
      for (const value of g) {
        if ((yield_ = yield_ || !f(value, index++))) {
          yield value
        }
      }
    }

export default skipWhile
