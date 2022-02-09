/** @yields characters from `first` to `last` inclusive. */
const charRange =
  function* (first: string, last: string): Generator<string> {
    const firstCharCode = first.charCodeAt(0)
    const lastCharCode = last.charCodeAt(0)
    for (let charCode = firstCharCode; charCode <= lastCharCode; charCode++) {
      yield String.fromCharCode(charCode)
    }
  }

export default charRange
