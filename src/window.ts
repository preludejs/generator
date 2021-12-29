const window =
  <T>(n: number) =>
    function* (g: Iterable<T>): Generator<T[]> {
      const values: T[] = []
      for (const value of g) {
        switch (values.push(value)) {
          case n + 1:
            values.shift()
          case n:
            yield values.slice()
        }
      }
    }

export default window
