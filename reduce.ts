const reduce =
  <T, U>(f: (r: U, _: T, i: number) => U, a: U, g: Iterable<T>): U =>
    Array.from(g).reduce(f, a)

export default reduce
