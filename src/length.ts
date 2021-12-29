const length =
  (g: Iterable<unknown>): number => {
    let i = 0
    for (const _ of g) {
      i++
    }
    return i
  }

export default length
