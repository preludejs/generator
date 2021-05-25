type PeekableIterator<T> = Iterable<T> & Iterator<T> & { peek: (index?: number) => IteratorResult<T> }

export default PeekableIterator
