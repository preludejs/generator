const ascii =
  function *(start: string, end: string): Generator<string> {
    const start_ = start.charCodeAt(0)
    const end_ = end.charCodeAt(0)
    for (let i = start_; i <= end_; i++) {
      yield String.fromCharCode(i)
    }
  }

export default ascii
