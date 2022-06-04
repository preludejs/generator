/** @returns a map-like object of grouped values. */
const groupedRecord =
  <T, K extends number | string | symbol>(keyOfValue: (value: T) => K) =>
    (values: Iterable<T>) => {
      const map = {} as Record<K, undefined | (T[])>
      for (const value of values) {
        const key = keyOfValue(value);
        (map[key] = map[key] ?? [] as T[]).push(value)
      }
      return map
    }

export default groupedRecord
