const first =
  <T>(g: Iterable<T>): T => {
    for (let value of g) {
      return value
    }
    throw new Error('Not found.')
  }

export default first
