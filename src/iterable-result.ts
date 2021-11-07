type IterableResult<G> = G extends Iterable<infer T> ? T : never

export default IterableResult
