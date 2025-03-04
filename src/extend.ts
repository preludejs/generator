import map from './map.js'

/**
 * Creates a generator that extends each value from an iterable with additional properties.
 * 
 * @template T - Type of elements in the input iterable
 * @template U - Type of the extension object to merge with each element
 * @param f - Function that generates extension properties for each element
 * @returns A function that takes an iterable and returns a generator of extended objects
 * @yields Objects that combine the original value with additional properties
 * 
 * @example
 * // Add an 'index' property to each element
 * const withIndex = [...extend((_, i) => ({ index: i }))(['a', 'b', 'c'])]
 * // Result: [{ '0': 'a', index: 0 }, { '0': 'b', index: 1 }, { '0': 'c', index: 2 }]
 * 
 * @example
 * // Extend objects with calculated properties
 * const items = [{ value: 5 }, { value: 10 }, { value: 15 }]
 * const withDouble = [...extend(item => ({ double: item.value * 2 }))(items)]
 * // Result: [{ value: 5, double: 10 }, { value: 10, double: 20 }, { value: 15, double: 30 }]
 */
export const extend =
  <T, U>(f: (value: T, index: number) => U) =>
    map<T, T & U>((value, index) => ({ ...value, ...f(value, index) }))

export default extend
