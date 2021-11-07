/**
 * @param start Start of range.
 * @param end End of range (inclusive).
 * @return `start` to `end` inclusive range number iterator.
 */
const range =
  function *(start: number, end: number): Generator<number> {
    for (let i = start; i <= end; i++) {
      yield i
    }
  }

export default range
