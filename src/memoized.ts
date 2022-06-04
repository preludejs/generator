/** @returns generator function that memoizes its values. */
const memoized =
  <T>(iterable: Iterable<T>) => {
    const values: T[] = []
    const iterator = iterable[Symbol.iterator]()
    const f =
      function* (): Generator<T> {
        for (let index = 0; ; index++) {
          if (index === values.length) {
            const result = iterator.next()
            if (result.done) {
              break
            }
            values.push(result.value)
          }
          yield values[index]
        }
      }
    f.values = values
    return f
  }

export default memoized
