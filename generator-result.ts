type GeneratorResult<G> = G extends Generator<infer T> ? T : never

export default GeneratorResult
