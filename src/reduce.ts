const reduce =
  <T, U>(reduction: (result: U, value: T, index: number) => U, initial: U) =>
    (values: Iterable<T>): U =>
      Array.from(values).reduce(reduction, initial)

export default reduce
