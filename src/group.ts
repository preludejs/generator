const group =
  <T, K extends string>(f: (value: T) => K) =>
    function* (g: Iterable<T>): Generator<[ key: K, values: T[] ]> {
      const ks: K[] = []
      const rs = {} as Record<K, T[]>
      for (const value of g) {
        const k = f(value)
        if (k in rs) {
          rs[k].push(value)
        } else {
          ks.push(k)
          rs[k] = [ value ]
        }
      }
      for (const k of ks) {
        yield [ k, rs[k] ]
      }
    }

export default group
