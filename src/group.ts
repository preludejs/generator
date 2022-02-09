const group =
  <T, K extends boolean | number | string | symbol>(f: (value: T) => K) =>
    function* (g: Iterable<T>): Generator<[ key: K, values: T[] ], void, undefined> {
      const rs = new Map<K, T[]>()
      for (const value of g) {
        const k = f(value)
        const values = rs.get(k)
        if (values) {
          values.push(value)
        } else {
          rs.set(k, [ value ])
        }
      }
      yield* rs.entries()
    }

export default group
