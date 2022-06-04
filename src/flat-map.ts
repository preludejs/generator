/** [flatMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)-like combinator. */
const flatMap =
  <T, R>(map: (value: T, index: number) => Iterable<R>) =>
    function* (values: Iterable<T>): Generator<R> {
      let index = 0
      for (const outer of values) {
        for (const inner of map(outer, index++)) {
          yield inner
        }
      }
    }

export default flatMap
