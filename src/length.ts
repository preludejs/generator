import count from './count.js'

/** @returns length property of values if available, otherwise counts values. */
const length =
  (values: Iterable<unknown> & { length?: number }): number =>
    values?.length ?? count()(values)

export default length
