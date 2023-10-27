/** @returns a map-like object of grouped values. */
const groupedRecord =
  <T, K extends number | string | symbol>(keyOfValue: (value: T) => K) =>
    (values: Iterable<T>) => {
      const record = {} as Record<K, undefined | (T[])>
      for (const value of values) {
        const key = keyOfValue(value)
        ;(record[key] ??= []).push(value)
      }
      return record
    }

export default groupedRecord
