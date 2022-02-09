/** [flatMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)-like combinator. */
const flatMap =
  <T, R>(f: (value: T, index: number) => Iterable<R>) =>
    function* (g: Iterable<T>): Generator<R> {
      let i = 0
      for (const outer of g) {
        for (const inner of f(outer, i++)) {
          yield inner
        }
      }
    }

export default flatMap
