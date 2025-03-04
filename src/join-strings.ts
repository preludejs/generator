import array from './array.js'

/**
 * Creates a function that joins string values from an iterable using the specified separator.
 * Similar to Array.prototype.join but works with any iterable of strings.
 *
 * @param separator - The string to use as separator between joined values
 * @returns A function that takes an iterable of strings and returns them joined with the separator
 *
 * @example
 * ```typescript
 * // Join with comma
 * const commaSeparated = G.joinStrings(',');
 * commaSeparated(['a', 'b', 'c']); // 'a,b,c'
 *
 * // Join with space
 * const spaceSeparated = G.joinStrings(' ');
 * spaceSeparated(G.map(x => String(x))(G.range(1, 4))); // '1 2 3'
 *
 * // Empty separator
 * const concatenated = G.joinStrings('');
 * concatenated(['hello', 'world']); // 'helloworld'
 * ```
 */
export const joinStrings =
  (separator: string) =>
    (values: Iterable<string>): string =>
      array(values).join(separator)

export default joinStrings
