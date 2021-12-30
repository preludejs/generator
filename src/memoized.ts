const memoized =
  <T>(g: Iterable<T>) => {
    const values: T[] = []
    const g_ = g[Symbol.iterator]()
    const f = function* (): Generator<T> {
      for (let i = 0; ; i++) {
        if (i === values.length) {
          const _ = g_.next()
          if (_.done) {
            break
          }
          values.push(_.value)
        }
        yield values[i]
      }
    }
    f.values = values
    return f
  }

export default memoized
