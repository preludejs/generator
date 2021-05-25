/** Comparision result type. */
export type R = -1 | 0 | 1

/** Comparision function type. */
export type Cmp<T> = (a: T, b: T) => R
