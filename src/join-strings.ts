import array from './array.js'

const joinStrings =
  (separator: string) =>
    (values: Iterable<string>): string =>
      array(values).join(separator)

export default joinStrings
