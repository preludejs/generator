/**
 * Generates a sequence of numbers from start to end inclusive.
 * If end > start and no step is provided, step defaults to 1.
 * If end < start and no step is provided, step defaults to -1.
 *
 * @param start - The first number in the sequence
 * @param end - The last number in the sequence
 * @param step - Optional step between numbers (default: inferred from start/end)
 * @yields Numbers from start to end with the given step
 *
 * @example
 * ```ts
 * G.pipe(
 *   G.range(1, 5),
 *   G.array
 * ) // [1, 2, 3, 4, 5]
 *
 * G.pipe(
 *   G.range(10, 1, -2),
 *   G.array
 * ) // [10, 8, 6, 4, 2]
 * ```
 */
export const range =
  function* (start: number, end: number, step?: number): Generator<number> {
    const step_ = step ?? (end >= start ? 1 : -1)
    for (let value = start; step_ >= 0 ? value <= end : value >= end; value += step_) {
      yield value
    }
  }

export default range
