import type * as Cmp from '@prelude/cmp'

/** @yields sorted values. */
const sort =
  <T, U extends T = T>(cmp: Cmp.t<U>) =>
    function* (values: Iterable<T>) {
      yield* Array.from(values).sort((a, b) => cmp(a as U, b as U))
    }

export default sort
