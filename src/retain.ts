const retain =
  <T = unknown, TReturn = unknown, TNext = unknown>(g: Generator<T>) => {
    let retainCount = 1
    const g_: Generator<T, TReturn | undefined, TNext> = {
      next() {
        return g.next()
      },
      return(value: TReturn) {
        if (retainCount > 0) {
          retainCount--
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
