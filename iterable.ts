const iterable =
  <T>(f: () => Iterator<T>): Iterable<T> => ({
    [Symbol.iterator]: f
  })

export default iterable
