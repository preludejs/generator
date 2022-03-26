const retain =
  <T = unknown, TReturn = unknown, TNext = unknown>(g: Generator<T>, count = 1) => {
    let count_ = count
    const g_: Generator<T, TReturn | undefined, TNext> = {
      next() {
        return g.next()
      },
      return(value: TReturn) {
        if (count_ > 0) {
          count_--
          return { done: true, value: undefined }
        }
        return g_.return(value)
      },
      throw(err: unknown) {
        return g_.throw(err)
      },
      [Symbol.iterator]() {
        return g_
      }
    }
    return g_
  }

export default retain
