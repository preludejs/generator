const consume =
  <T>(g: Iterable<T>, f?: (value: T) => unknown): void => {
    for (const _ of g) {
      if (f) {
        f(_)
      }
    }
  }

export default consume
