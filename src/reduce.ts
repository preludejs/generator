const reduce =
  <T, U>(reduction: (result: U, value: T, index: number) => U, initial: U) =>
    (values: Iterable<T>): U => {
      let result = initial
      let index = 0
      for (const value of values) {
        result = reduction(result, value, index++)
      }
      return result
    }

export default reduce
