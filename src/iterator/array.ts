const array =
  <T>(g: Iterator<T>): T[] => {
    const values: T[] = []
    for (let next = g.next(); !next.done; next = g.next()) {
      values.push(next.value)
    }
    return values
  }

export default array
