
/**
 * Conflict resolution strategy that throws an error on duplicate keys
 *
 * @template T - Element type
 * @template K - Key type
 * @param _result - Resulting record
 * @param _value - Current value
 * @param key - Key that has a conflict
 * @throws {Error} Always throws on conflict
 */
const throws =
  <T, K extends number | string | symbol>(_result: Record<K, undefined | T>, _value: T, key: K) => {
    throw new Error(`duplicate key ${String(key)}`)
  }

/**
 * Conflict resolution strategy that keeps the first value for each key
 *
 * @template T - Element type
 * @template K - Key type
 * @param _result - Resulting record
 * @param _value - Current value that will be ignored
 * @param _key - Key that has a conflict
 */
const firstWins =
  <T, K extends number | string | symbol>(_result: Record<K, undefined | T>, _value: T, _key: K) => {
  }

/**
 * Conflict resolution strategy that uses the last value for each key
 *
 * @template T - Element type
 * @template K - Key type
 * @param result - Resulting record
 * @param value - Current value that will replace existing value
 * @param key - Key that has a conflict
 */
const lastWins =
  <T, K extends number | string | symbol>(result: Record<K, undefined | T>, value: T, key: K) => {
    result[key] = value
  }

/**
 * Creates a function that converts an iterable to a record (object) using
 * a key extraction function and conflict resolution strategy.
 *
 * @template T - Element type
 * @template K - Key type
 * @param keyOfValue - Function to extract a key from each value
 * @param conflict - Strategy for handling key conflicts (default: throws)
 * @returns A function that converts an iterable to a record
 *
 * @example
 * ```ts
 * G.pipe(
 *   G.of([
 *     { id: 1, name: 'Alice' },
 *     { id: 2, name: 'Bob' }
 *   ]),
 *   G.record(user => user.id)
 * ) // { 1: { id: 1, name: 'Alice' }, 2: { id: 2, name: 'Bob' } }
 * ```
 */
export const record =
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
