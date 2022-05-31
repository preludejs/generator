/** @returns a {@link Map} of grouped values. */
const groupMap =
  <T, K>(keyOfValue: (value: T) => K) =>
    (values: Iterable<T>) => {
      const map = new Map<K, T[]>()
      for (const value of values) {
        const key = keyOfValue(value)
        const groupValues = map.get(key)
        if (groupValues) {
          groupValues.push(value)
        } else {
          map.set(key, [ value ])
        }
      }
      return map
    }

export default groupMap
