export type Predicate<T> =
  (value: T, index: number) => boolean

export type TypePredicate<T, U extends T> =
  (value: T, index: number) => value is U

export interface Filter {
  <T, U extends T>(predicate: TypePredicate<T, U>): (values: Iterable<T>) => Generator<U>
  <T>(predicate: Predicate<T>): (values: Iterable<T>) => Generator<T>
}

/**
 * Creates a generator that yields only elements from an iterable that pass a predicate test.
 * Similar to Array.prototype.filter(), but works with any iterable.
 *
 * @template T - Type of elements in the input iterable
 * @template U - Type of filtered elements (for type predicates)
 * @param predicate - Function to test each element and its index
 * @returns A function that takes an iterable and returns a generator of filtered elements
 * @yields Elements that pass the predicate test
 *
 * @example
 * // Filter out even numbers
 * const odds = [...filter((n: number) => n % 2 === 1)([1, 2, 3, 4, 5])]
 * // Result: [1, 3, 5]
 *
 * @example
 * // Filter using index
 * const everyOther = [...filter((_, idx) => idx % 2 === 0)(['a', 'b', 'c', 'd', 'e'])]
 * // Result: ['a', 'c', 'e']
 *
 * @example
 * // Using a type predicate to narrow types
 * const isString = (val: unknown): val is string => typeof val === 'string'
 * const strings = [...filter(isString)([1, 'a', 2, 'b', true])]
 * // Result: ['a', 'b'] (with correct string[] type)
 */
export const filter: Filter =
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
