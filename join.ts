import array from './array'

const join =
  (separator: string, g: Iterable<string>): string =>
    array(g).join(separator)

export default join
