
const throws =
  <T, K extends number | string | symbol>(_result: Record<K, undefined | T>, _value: T, key: K) => {
    throw new Error(`duplicate key ${String(key)}`)
  }

const firstWins =
  <T, K extends number | string | symbol>(_result: Record<K, undefined | T>, _value: T, _key: K) => {
  }

const lastWins =
  <T, K extends number | string | symbol>(result: Record<K, undefined | T>, value: T, key: K) => {
    result[key] = value
  }

const record =
  <T, K extends number | string | symbol>(
    keyOfValue: (value: T) => K,
    conflict: (result: Record<K, undefined | T>, value: T, key: K) => void = throws
  ) =>
    (values: Iterable<T>) => {
      const maplike = {} as Record<K, undefined | T>
      for (const value of values) {
        const key = keyOfValue(value);
        if (maplike.hasOwnProperty(key)) {
          conflict(maplike, value, key)
        } else {
          maplike[key] = value
        }
      }
      return maplike
    }

record.throws = throws
record.firstWins = firstWins
record.lastWins = lastWins

export default record
