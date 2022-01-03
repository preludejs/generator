const last =
  <T>(g: Iterable<T>): T => {
    let last_: undefined | T = undefined
    let found = false
    for (const value of g) {
      last_ = value
      found = true
    }
    if (!found) {
      throw new Error('Not found.')
    }
    return last_ as T
  }

export default last
