import type * as Cmp from '@prelude/cmp'

/** @yields sorted values. */
const sort =
  <T>(cmp: Cmp.t<T>) =>
    function* (values: Iterable<T>) {
      yield* Array.from(values).sort(cmp)
    }

export default sort
