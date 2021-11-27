import array from './array.js'

const joinStrings =
  (separator: string) =>
    (g: Iterable<string>): string =>
      array(g).join(separator)

export default joinStrings
