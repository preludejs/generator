import array from './array.js'

const joinStrings =
  (g: Iterable<string>, separator: string): string =>
    array(g).join(separator)

export default joinStrings
