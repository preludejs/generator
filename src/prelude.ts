import * as Cmp from '@prelude/cmp'

export type Generated<G> = G extends Generator<infer T> ? T : never

export {
  Cmp
}
