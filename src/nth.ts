const nth =
  <T>(n: number, { indexBase = 1 }: { indexBase?: 0 | 1 } = {}) => {
    if (n < 0) {
      throw new Error('n must be non-negative')
    }
    if (indexBase === 1 && n === 0) {
      throw new Error('n must be non-zero for 1-based index')
    }
    if (!Number.isSafeInteger(n)) {
      throw new Error('n must be an integer')
    }
    return (
      (values: Iterable<T>) => {
        let index = indexBase
        for (const value of values) {
          if (index++ === n) {
            return value
          }
        }
        throw new Error(`nth(${n}) (${indexBase}-based index) not found, max index ${index - 1}`)
      }
    )
  }

export default nth
