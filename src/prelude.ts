export * as Cmp from '@prelude/cmp'

export type Value<T> =
  T extends Iterable<infer U> ?
    U :
    T extends Iterator<infer U> ?
      U :
      never

export type Defined<T> =
  T extends undefined ?
    never :
    T
