import * as Cmp from '@prelude/cmp'

export type Generated<T> = T extends Generator<infer U> ? U : never

export type Iterated<T> = T extends Iterator<infer U> ? U : never

export type Defined<T> = T extends undefined ? never : T;

export {
  Cmp
}
