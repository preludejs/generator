import map from './map.js'

/** @yields extended object with provided properties. */
export const extend =
  <T, U>(f: (value: T, index: number) => U) =>
    map<T, T & U>((value, index) => ({ ...value, ...f(value, index) }))

export default extend
