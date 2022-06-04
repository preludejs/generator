/** @yields numbers from `start` to `end` inclusive. */
const range =
  function* (start: number, end: number): Generator<number> {
    for (let value = start; value <= end; value++) {
      yield value
    }
  }

export default range
