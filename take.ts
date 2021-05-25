const take =
  function *<T>(n: number, g: Generator<T>): Generator<T> {
    for (let i = 0; i < n; i++) {
      const { done, value } = g.next()
      if (done) {
        break
      }
      yield value
    }
  }

export default take
