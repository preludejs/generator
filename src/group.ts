import groupMap from './group-map.js'

/** @yields grouped entries based on arbitrary element to key mapping. */
const group =
  <T, K>(keyOfValue: (value: T) => K) =>
    (values: Iterable<T>) =>
      groupMap(keyOfValue)(values).entries()

export default group
