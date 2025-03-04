import memoized from './memoized.js'

/**
 * Creates a function that applies multiple functions to the same iterable, returning an array of results.
 * Uses memoization to ensure the iterable is only traversed once.
 *
 * @template T - Type of elements in the iterable
 * @template Args - Array of functions that take an iterable and return some value
 * @param fs - One or more functions to apply to the iterable
 * @returns A function that takes an iterable and returns an array of results from each function
 *
 * @example
 * // Calculate sum and product in a single pass
 * const sumAndProduct = fork(
 *   values => [...values].reduce((a, b) => a + b, 0),
 *   values => [...values].reduce((a, b) => a * b, 1)
 * )
 * const [sum, product] = sumAndProduct([1, 2, 3, 4])
 * // Result: [10, 24]
 *
 * @example
 * // Calculate multiple statistics
 * const stats = fork(
 *   values => Math.min(...values),
 *   values => Math.max(...values),
 *   values => [...values].reduce((a, b) => a + b, 0) / [...values].length
 * )
 * const [min, max, avg] = stats([5, 10, 15, 20])
 * // Result: [5, 20, 12.5]
 */
export const fork =
  <T, Args extends ((values: Iterable<T>, index: number) => unknown)[]>(...fs: Args) =>
    (values: Iterable<T>) => {
      const values_ = memoized(values)
      return fs.map((f, i) => f(values_(), i)) as { [K in keyof Args]: ReturnType<Args[K]> }
    }

export default fork
