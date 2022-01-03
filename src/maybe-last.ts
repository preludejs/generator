const maybeLast =
  <T>(g: Iterable<T>): undefined | T => {
    let last: undefined | T = undefined
    for (const value of g) {
      last = value
    }
    return last
  }

export default maybeLast
