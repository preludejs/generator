const at =
  <T>(index: number) => {
    if (index < 0) {
      throw new Error('index must be non-negative')
    }
    if (!Number.isSafeInteger(index)) {
      throw new Error('index must be an integer')
    }
    return (
      (values: Iterable<T>) => {
        let index_ = 0
        for (const value of values) {
          if (index_++ === index) {
            return value
          }
        }
        throw new Error(`index ${index} out of bounds`)
      }
    )
  }

export default at
