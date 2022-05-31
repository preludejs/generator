import groupMap from './group-map.js'

/** @yields grouped entries based on arbitrary element to key mapping. */
const group =
  <T, K>(f: (value: T) => K) =>
    (g: Iterable<T>) =>
      groupMap(f)(g).entries()

export default group
