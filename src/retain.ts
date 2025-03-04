/**
 * Wraps a generator to retain its state for a specified number of return operations.
 * This is useful when you want to keep a generator alive through operations that would
 * normally terminate it.
 *
 * @template T - Element type
 * @template TReturn - Return type
 * @template TNext - Next type
 * @param g - The generator to retain
 * @param count - Number of return operations to intercept before forwarding to original generator (default: 1)
 * @returns A wrapped generator that retains state for the specified count of return operations
 *
 * @example
 * ```ts
 * // Useful in composition when you need to preserve generator state
 * const gen = G.retain(myGenerator, 2);
 * // gen will survive 2 return() calls before terminating
 * ```
 */
export const retain =
  <T = unknown, TReturn = unknown, TNext = unknown>(g: Generator<T>, count = 1) => {
    let count_ = count
    const g_: Generator<T, TReturn | undefined, TNext> = {
      next() {
        return g.next()
      },
      return(value: TReturn) {
        if (count_ > 0) {
          count_--
          return { done: true, value: undefined }
        }
        return g_.return(value)
      },
      throw(err: unknown) {
        return g_.throw(err)
      },
      [Symbol.iterator]() {
        return g_
      }
    }
    return g_
  }

export default retain
