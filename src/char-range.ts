/** @yields characters from `firstChar` to `lastChar` inclusive. */
const charRange =
  function* (firstChar: string, lastChar: string): Generator<string> {
    const firstCharCode = firstChar.charCodeAt(0)
    const lastCharCode = lastChar.charCodeAt(0)
    for (let charCode = firstCharCode; charCode <= lastCharCode; charCode++) {
      yield String.fromCharCode(charCode)
    }
  }

export default charRange
