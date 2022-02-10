import grouped from './grouped.js'

/** @yields grouped entries based on arbitrary element to key mapping. */
const group =
  <T, K>(f: (value: T) => K) =>
    (g: Iterable<T>) =>
      grouped(f)(g).entries()

export default group
