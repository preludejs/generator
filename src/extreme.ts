/** @returns min and max based on comparision function. */
const extreme =
  <T>(f: (a: T, b: T) => number) =>
    (values: Iterable<T>) => {
      const iterator = values[Symbol.iterator]()
      let next = iterator.next()
      if (next.done) {
        return
      }
      const result = {
        min: next.value,
        max: next.value
      }
      for (; !next.done; next = iterator.next()) {
        if (f(result.max, next.value) < 0) {
          result.max = next.value
        }
        if (f(result.min, next.value) > 0) {
          result.min = next.value
        }
      }
      return result
    }

export default extreme
