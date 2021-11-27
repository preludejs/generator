import group from './group.js'

const grouped =
  <T, K extends string>(f: (value: T) => K) =>
    (g: Iterable<T>): Record<K, undefined | T[]> =>
      Object.fromEntries(group(f)(g)) as Record<K, undefined | T[]>

export default grouped
