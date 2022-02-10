/** @returns a {Map} of grouped values. */
const grouped =
  <T, K>(f: (value: T) => K) =>
    (g: Iterable<T>) => {
      const map = new Map<K, T[]>()
      for (const value of g) {
        const k = f(value)
        const values = map.get(k)
        if (values) {
          values.push(value)
        } else {
          map.set(k, [ value ])
        }
      }
      return map
    }

export default grouped
