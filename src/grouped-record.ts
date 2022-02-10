/** @returns a map-like object of grouped values. */
const groupedRecord =
  <T, K extends number | string | symbol>(f: (value: T) => K) =>
    (g: Iterable<T>) => {
      const map = {} as Record<K, undefined | (T[])>
      for (const value of g) {
        const k = f(value);
        (map[k] = map[k] ?? [] as T[]).push(value)
      }
      return map
    }

export default groupedRecord
