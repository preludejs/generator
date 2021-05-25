const partition =
  <T, K extends string>(f: (value: T) => K, g: Iterable<T>): Record<K, undefined | T[]> => {
    const r = {} as Record<K, undefined | T[]>
    for (const _ of g) {
      const k = f(_)
      ;((r[k] = (r[k] ?? [])) as T[]).push(_)
    }
    return r
  }

export default partition
