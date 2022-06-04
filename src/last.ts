const last =
  <T>(values: Iterable<T>): T => {
    let result: undefined | T = undefined
    let found = false
    for (const value of values) {
      result = value
      found = true
    }
    if (!found) {
      throw new Error('Not found.')
    }
    return result as T
  }

export default last
