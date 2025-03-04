/**
 * Creates an infinite generator that yields the Fibonacci sequence.
 *
 * @param a - First starting value, defaults to 0
 * @param b - Second starting value, defaults to 1
 * @yields Fibonacci numbers in sequence
 * @returns An infinite generator of Fibonacci numbers
 *
 * @example
 * // Generate standard Fibonacci sequence
 * const fib = fibonacci()
 * const first8 = Array.from({ length: 8 }, () => fib.next().value)
 * // Result: [1, 1, 2, 3, 5, 8, 13, 21]
 *
 * @example
 * // Generate Fibonacci sequence with custom starting values
 * const fib = fibonacci(2, 3)
 * const first6 = Array.from({ length: 6 }, () => fib.next().value)
 * // Result: [3, 5, 8, 13, 21, 34]
 */
export const fibonacci =
  function* (a = 0, b = 1) {
    while (true) {
      [ a, b ] = [ b, a + b]
      yield a
    }
  }

export default fibonacci
