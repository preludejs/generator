const maybeLast =
  <T>(values: Iterable<T>): undefined | T => {
    let last: undefined | T = undefined
    for (const value of values) {
      last = value
    }
    return last
  }

export default maybeLast
