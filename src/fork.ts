import memoized from './memoized.js'

const fork =
  <T, Args extends ((values: Iterable<T>, index: number) => unknown)[]>(...fs: Args) =>
    (values: Iterable<T>) => {
      const values_ = memoized(values)
      return fs.map((f, i) => f(values_(), i)) as { [K in keyof Args]: ReturnType<Args[K]> }
    }

export default fork
