type Z<A, B> = (a: A) => B

type Pipe1 = {
  <A>(a: A): A,
  <A,B>(a: A, b: Z<A,B>): B,
  <A,B,C>(a: A, b: Z<A,B>, c: Z<B,C>): C,
  <A,B,C,D>(a: A, b: Z<A,B>, c: Z<B,C>, d: Z<C,D>): D,
  <A,B,C,D,E>(a: A, b: Z<A,B>, c: Z<B,C>, d: Z<C,D>, e: Z<D,E>): E,
  <A,B,C,D,E,F>(a: A, b: Z<A,B>, c: Z<B,C>, d: Z<C,D>, e: Z<D,E>, f: Z<E,F>): F,
  <A,B,C,D,E,F,G>(a: A, b: Z<A,B>, c: Z<B,C>, d: Z<C,D>, e: Z<D,E>, f: Z<E,F>, g: Z<F,G>): G,
  <A,B,C,D,E,F,G,H>(a: A, b: Z<A,B>, c: Z<B,C>, d: Z<C,D>, e: Z<D,E>, f: Z<E,F>, g: Z<F,G>, h: Z<G,H>): H,
  <A,B,C,D,E,F,G,H,I>(a: A, b: Z<A,B>, c: Z<B,C>, d: Z<C,D>, e: Z<D,E>, f: Z<E,F>, g: Z<F,G>, h: Z<G,H>, i: Z<H,I>): I,
  <A,B,C,D,E,F,G,H,I,J>(a: A, b: Z<A,B>, c: Z<B,C>, d: Z<C,D>, e: Z<D,E>, f: Z<E,F>, g: Z<F,G>, h: Z<G,H>, i: Z<H,I>, j: Z<I,J>): J,
  <A,B,C,D,E,F,G,H,I,J,K>(a: A, b: Z<A,B>, c: Z<B,C>, d: Z<C,D>, e: Z<D,E>, f: Z<E,F>, g: Z<F,G>, h: Z<G,H>, i: Z<H,I>, j: Z<I,J>, k: Z<J,K>): K,
  <A,B,C,D,E,F,G,H,I,J,K,L>(a: A, b: Z<A,B>, c: Z<B,C>, d: Z<C,D>, e: Z<D,E>, f: Z<E,F>, g: Z<F,G>, h: Z<G,H>, i: Z<H,I>, j: Z<I,J>, k: Z<J,K>, l: Z<K,L>): L,
  <A,B,C,D,E,F,G,H,I,J,K,L,M>(a: A, b: Z<A,B>, c: Z<B,C>, d: Z<C,D>, e: Z<D,E>, f: Z<E,F>, g: Z<F,G>, h: Z<G,H>, i: Z<H,I>, j: Z<I,J>, k: Z<J,K>, l: Z<K,L>, m: Z<L,M>): M,
  <A,B,C,D,E,F,G,H,I,J,K,L,M,N>(a: A, b: Z<A,B>, c: Z<B,C>, d: Z<C,D>, e: Z<D,E>, f: Z<E,F>, g: Z<F,G>, h: Z<G,H>, i: Z<H,I>, j: Z<I,J>, k: Z<J,K>, l: Z<K,L>, m: Z<L,M>, n: Z<M,N>): N,
  <A,B,C,D,E,F,G,H,I,J,K,L,M,N,O>(a: A, b: Z<A,B>, c: Z<B,C>, d: Z<C,D>, e: Z<D,E>, f: Z<E,F>, g: Z<F,G>, h: Z<G,H>, i: Z<H,I>, j: Z<I,J>, k: Z<J,K>, l: Z<K,L>, m: Z<L,M>, n: Z<M,N>, o: Z<N,O>): O,
  <A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P>(a: A, b: Z<A,B>, c: Z<B,C>, d: Z<C,D>, e: Z<D,E>, f: Z<E,F>, g: Z<F,G>, h: Z<G,H>, i: Z<H,I>, j: Z<I,J>, k: Z<J,K>, l: Z<K,L>, m: Z<L,M>, n: Z<M,N>, o: Z<N,O>, p: Z<O,P>): P,
  <A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q>(a: A, b: Z<A,B>, c: Z<B,C>, d: Z<C,D>, e: Z<D,E>, f: Z<E,F>, g: Z<F,G>, h: Z<G,H>, i: Z<H,I>, j: Z<I,J>, k: Z<J,K>, l: Z<K,L>, m: Z<L,M>, n: Z<M,N>, o: Z<N,O>, p: Z<O,P>, q: Z<P,Q>): Q,
  <A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R>(a: A, b: Z<A,B>, c: Z<B,C>, d: Z<C,D>, e: Z<D,E>, f: Z<E,F>, g: Z<F,G>, h: Z<G,H>, i: Z<H,I>, j: Z<I,J>, k: Z<J,K>, l: Z<K,L>, m: Z<L,M>, n: Z<M,N>, o: Z<N,O>, p: Z<O,P>, q: Z<P,Q>, r: Z<Q,R>): R,
  <A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S>(a: A, b: Z<A,B>, c: Z<B,C>, d: Z<C,D>, e: Z<D,E>, f: Z<E,F>, g: Z<F,G>, h: Z<G,H>, i: Z<H,I>, j: Z<I,J>, k: Z<J,K>, l: Z<K,L>, m: Z<L,M>, n: Z<M,N>, o: Z<N,O>, p: Z<O,P>, q: Z<P,Q>, r: Z<Q,R>, s: Z<R,S>): S,
  <A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T>(a: A, b: Z<A,B>, c: Z<B,C>, d: Z<C,D>, e: Z<D,E>, f: Z<E,F>, g: Z<F,G>, h: Z<G,H>, i: Z<H,I>, j: Z<I,J>, k: Z<J,K>, l: Z<K,L>, m: Z<L,M>, n: Z<M,N>, o: Z<N,O>, p: Z<O,P>, q: Z<P,Q>, r: Z<Q,R>, s: Z<R,S>, t: Z<S,T>): T,
  <A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U>(a: A, b: Z<A,B>, c: Z<B,C>, d: Z<C,D>, e: Z<D,E>, f: Z<E,F>, g: Z<F,G>, h: Z<G,H>, i: Z<H,I>, j: Z<I,J>, k: Z<J,K>, l: Z<K,L>, m: Z<L,M>, n: Z<M,N>, o: Z<N,O>, p: Z<O,P>, q: Z<P,Q>, r: Z<Q,R>, s: Z<R,S>, t: Z<S,T>, u: Z<T,U>): U,
  <A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V>(a: A, b: Z<A,B>, c: Z<B,C>, d: Z<C,D>, e: Z<D,E>, f: Z<E,F>, g: Z<F,G>, h: Z<G,H>, i: Z<H,I>, j: Z<I,J>, k: Z<J,K>, l: Z<K,L>, m: Z<L,M>, n: Z<M,N>, o: Z<N,O>, p: Z<O,P>, q: Z<P,Q>, r: Z<Q,R>, s: Z<R,S>, t: Z<S,T>, u: Z<T,U>, v: Z<U,V>): V,
  <A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W>(a: A, b: Z<A,B>, c: Z<B,C>, d: Z<C,D>, e: Z<D,E>, f: Z<E,F>, g: Z<F,G>, h: Z<G,H>, i: Z<H,I>, j: Z<I,J>, k: Z<J,K>, l: Z<K,L>, m: Z<L,M>, n: Z<M,N>, o: Z<N,O>, p: Z<O,P>, q: Z<P,Q>, r: Z<Q,R>, s: Z<R,S>, t: Z<S,T>, u: Z<T,U>, v: Z<U,V>, w: Z<V,W>): W,
  <A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X>(a: A, b: Z<A,B>, c: Z<B,C>, d: Z<C,D>, e: Z<D,E>, f: Z<E,F>, g: Z<F,G>, h: Z<G,H>, i: Z<H,I>, j: Z<I,J>, k: Z<J,K>, l: Z<K,L>, m: Z<L,M>, n: Z<M,N>, o: Z<N,O>, p: Z<O,P>, q: Z<P,Q>, r: Z<Q,R>, s: Z<R,S>, t: Z<S,T>, u: Z<T,U>, v: Z<U,V>, w: Z<V,W>, x: Z<W,X>): X,
  <A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y>(a: A, b: Z<A,B>, c: Z<B,C>, d: Z<C,D>, e: Z<D,E>, f: Z<E,F>, g: Z<F,G>, h: Z<G,H>, i: Z<H,I>, j: Z<I,J>, k: Z<J,K>, l: Z<K,L>, m: Z<L,M>, n: Z<M,N>, o: Z<N,O>, p: Z<O,P>, q: Z<P,Q>, r: Z<Q,R>, s: Z<R,S>, t: Z<S,T>, u: Z<T,U>, v: Z<U,V>, w: Z<V,W>, x: Z<W,X>, y: Z<X,Y>): Y
}

const pipe1: Pipe1 =
  (g: unknown, ...gs: (Z<unknown, unknown>)[]): unknown =>
    gs.reduce((r, _) => _(r), g)

export default pipe1
