/** @returns a map-like object of grouped values. */
export const groupObject =
  <T, K extends number | string | symbol>(keyOfValue: (value: T) => K) =>
    (values: Iterable<T>) => {
      const record = {} as Record<K, undefined | (T[])>
      for (const value of values) {
        const key = keyOfValue(value)
        const recordValues = record[key]
        if (recordValues) {
          recordValues.push(value)
        } else {
          record[key] = [ value ]
        }
      }
      return record
    }

export default groupObject
