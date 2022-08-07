export type Predicate<T> =
  (value: T, index: number) => boolean

export type TypePredicate<T, U extends T> =
  (value: T, index: number) => value is U

export interface Filter {
  <T, U extends T>(predicate: TypePredicate<T, U>): (values: Iterable<T>) => Generator<U>
  <T>(predicate: Predicate<T>): (values: Iterable<T>) => Generator<T>
}

/** @yields elements passing provided predicate only. */
const filter: Filter =
  (predicate: (value: unknown, index: number) => unknown) =>
    function* (values: Iterable<unknown>): Generator<unknown> {
      let index = 0
      for (const value of values) {
        if (predicate(value, index++)) {
          yield value
        }
      }
    }

export default filter
