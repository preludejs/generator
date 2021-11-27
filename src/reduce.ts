const reduce =
  <T, U>(f: (result: U, value: T, index: number) => U, initialResult: U) =>
    (g: Iterable<T>): U =>
      Array.from(g).reduce(f, initialResult)

export default reduce
