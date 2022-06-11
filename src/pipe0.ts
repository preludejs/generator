type Z<A, B> = (a: A) => B

type Pipe0 = {
  <A>(): (a: A) => A,
  <A,B>(b: Z<A,B>): (a: A) => B,
  <A,B,C>(b: Z<A,B>, c: Z<B,C>): (a: A) => C,
  <A,B,C,D>(b: Z<A,B>, c: Z<B,C>, d: Z<C,D>): (a: A) => D,
  <A,B,C,D,E>(b: Z<A,B>, c: Z<B,C>, d: Z<C,D>, e: Z<D,E>): (a: A) => E,
  <A,B,C,D,E,F>(b: Z<A,B>, c: Z<B,C>, d: Z<C,D>, e: Z<D,E>, f: Z<E,F>): (a: A) => F,
  <A,B,C,D,E,F,G>(b: Z<A,B>, c: Z<B,C>, d: Z<C,D>, e: Z<D,E>, f: Z<E,F>, g: Z<F,G>): (a: A) => G,
  <A,B,C,D,E,F,G,H>(b: Z<A,B>, c: Z<B,C>, d: Z<C,D>, e: Z<D,E>, f: Z<E,F>, g: Z<F,G>, h: Z<G,H>): (a: A) => H,
  <A,B,C,D,E,F,G,H,I>(b: Z<A,B>, c: Z<B,C>, d: Z<C,D>, e: Z<D,E>, f: Z<E,F>, g: Z<F,G>, h: Z<G,H>, i: Z<H,I>): (a: A) => I,
  <A,B,C,D,E,F,G,H,I,J>(b: Z<A,B>, c: Z<B,C>, d: Z<C,D>, e: Z<D,E>, f: Z<E,F>, g: Z<F,G>, h: Z<G,H>, i: Z<H,I>, j: Z<I,J>): (a: A) => J,
  <A,B,C,D,E,F,G,H,I,J,K>(b: Z<A,B>, c: Z<B,C>, d: Z<C,D>, e: Z<D,E>, f: Z<E,F>, g: Z<F,G>, h: Z<G,H>, i: Z<H,I>, j: Z<I,J>, k: Z<J,K>): (a: A) => K,
  <A,B,C,D,E,F,G,H,I,J,K,L>(b: Z<A,B>, c: Z<B,C>, d: Z<C,D>, e: Z<D,E>, f: Z<E,F>, g: Z<F,G>, h: Z<G,H>, i: Z<H,I>, j: Z<I,J>, k: Z<J,K>, l: Z<K,L>): (a: A) => L,
  <A,B,C,D,E,F,G,H,I,J,K,L,M>(b: Z<A,B>, c: Z<B,C>, d: Z<C,D>, e: Z<D,E>, f: Z<E,F>, g: Z<F,G>, h: Z<G,H>, i: Z<H,I>, j: Z<I,J>, k: Z<J,K>, l: Z<K,L>, m: Z<L,M>): (a: A) => M,
  <A,B,C,D,E,F,G,H,I,J,K,L,M,N>(b: Z<A,B>, c: Z<B,C>, d: Z<C,D>, e: Z<D,E>, f: Z<E,F>, g: Z<F,G>, h: Z<G,H>, i: Z<H,I>, j: Z<I,J>, k: Z<J,K>, l: Z<K,L>, m: Z<L,M>, n: Z<M,N>): (a: A) => N,
  <A,B,C,D,E,F,G,H,I,J,K,L,M,N,O>(b: Z<A,B>, c: Z<B,C>, d: Z<C,D>, e: Z<D,E>, f: Z<E,F>, g: Z<F,G>, h: Z<G,H>, i: Z<H,I>, j: Z<I,J>, k: Z<J,K>, l: Z<K,L>, m: Z<L,M>, n: Z<M,N>, o: Z<N,O>): (a: A) => O,
  <A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P>(b: Z<A,B>, c: Z<B,C>, d: Z<C,D>, e: Z<D,E>, f: Z<E,F>, g: Z<F,G>, h: Z<G,H>, i: Z<H,I>, j: Z<I,J>, k: Z<J,K>, l: Z<K,L>, m: Z<L,M>, n: Z<M,N>, o: Z<N,O>, p: Z<O,P>): (a: A) => P,
  <A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q>(b: Z<A,B>, c: Z<B,C>, d: Z<C,D>, e: Z<D,E>, f: Z<E,F>, g: Z<F,G>, h: Z<G,H>, i: Z<H,I>, j: Z<I,J>, k: Z<J,K>, l: Z<K,L>, m: Z<L,M>, n: Z<M,N>, o: Z<N,O>, p: Z<O,P>, q: Z<P,Q>): (a: A) => Q,
  <A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R>(b: Z<A,B>, c: Z<B,C>, d: Z<C,D>, e: Z<D,E>, f: Z<E,F>, g: Z<F,G>, h: Z<G,H>, i: Z<H,I>, j: Z<I,J>, k: Z<J,K>, l: Z<K,L>, m: Z<L,M>, n: Z<M,N>, o: Z<N,O>, p: Z<O,P>, q: Z<P,Q>, r: Z<Q,R>): (a: A) => R,
  <A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S>(b: Z<A,B>, c: Z<B,C>, d: Z<C,D>, e: Z<D,E>, f: Z<E,F>, g: Z<F,G>, h: Z<G,H>, i: Z<H,I>, j: Z<I,J>, k: Z<J,K>, l: Z<K,L>, m: Z<L,M>, n: Z<M,N>, o: Z<N,O>, p: Z<O,P>, q: Z<P,Q>, r: Z<Q,R>, s: Z<R,S>): (a: A) => S,
  <A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T>(b: Z<A,B>, c: Z<B,C>, d: Z<C,D>, e: Z<D,E>, f: Z<E,F>, g: Z<F,G>, h: Z<G,H>, i: Z<H,I>, j: Z<I,J>, k: Z<J,K>, l: Z<K,L>, m: Z<L,M>, n: Z<M,N>, o: Z<N,O>, p: Z<O,P>, q: Z<P,Q>, r: Z<Q,R>, s: Z<R,S>, t: Z<S,T>): (a: A) => T,
  <A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U>(b: Z<A,B>, c: Z<B,C>, d: Z<C,D>, e: Z<D,E>, f: Z<E,F>, g: Z<F,G>, h: Z<G,H>, i: Z<H,I>, j: Z<I,J>, k: Z<J,K>, l: Z<K,L>, m: Z<L,M>, n: Z<M,N>, o: Z<N,O>, p: Z<O,P>, q: Z<P,Q>, r: Z<Q,R>, s: Z<R,S>, t: Z<S,T>, u: Z<T,U>): (a: A) => U,
  <A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V>(b: Z<A,B>, c: Z<B,C>, d: Z<C,D>, e: Z<D,E>, f: Z<E,F>, g: Z<F,G>, h: Z<G,H>, i: Z<H,I>, j: Z<I,J>, k: Z<J,K>, l: Z<K,L>, m: Z<L,M>, n: Z<M,N>, o: Z<N,O>, p: Z<O,P>, q: Z<P,Q>, r: Z<Q,R>, s: Z<R,S>, t: Z<S,T>, u: Z<T,U>, v: Z<U,V>): (a: A) => V,
  <A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W>(b: Z<A,B>, c: Z<B,C>, d: Z<C,D>, e: Z<D,E>, f: Z<E,F>, g: Z<F,G>, h: Z<G,H>, i: Z<H,I>, j: Z<I,J>, k: Z<J,K>, l: Z<K,L>, m: Z<L,M>, n: Z<M,N>, o: Z<N,O>, p: Z<O,P>, q: Z<P,Q>, r: Z<Q,R>, s: Z<R,S>, t: Z<S,T>, u: Z<T,U>, v: Z<U,V>, w: Z<V,W>): (a: A) => W,
  <A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X>(b: Z<A,B>, c: Z<B,C>, d: Z<C,D>, e: Z<D,E>, f: Z<E,F>, g: Z<F,G>, h: Z<G,H>, i: Z<H,I>, j: Z<I,J>, k: Z<J,K>, l: Z<K,L>, m: Z<L,M>, n: Z<M,N>, o: Z<N,O>, p: Z<O,P>, q: Z<P,Q>, r: Z<Q,R>, s: Z<R,S>, t: Z<S,T>, u: Z<T,U>, v: Z<U,V>, w: Z<V,W>, x: Z<W,X>): (a: A) => X,
  <A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y>(b: Z<A,B>, c: Z<B,C>, d: Z<C,D>, e: Z<D,E>, f: Z<E,F>, g: Z<F,G>, h: Z<G,H>, i: Z<H,I>, j: Z<I,J>, k: Z<J,K>, l: Z<K,L>, m: Z<L,M>, n: Z<M,N>, o: Z<N,O>, p: Z<O,P>, q: Z<P,Q>, r: Z<Q,R>, s: Z<R,S>, t: Z<S,T>, u: Z<T,U>, v: Z<U,V>, w: Z<V,W>, x: Z<W,X>, y: Z<X,Y>): (a: A) => Y
}

const pipe: Pipe0 =
  (...gs: (Z<unknown, unknown>)[]) =>
    (g: unknown) =>
      gs.reduce((r, _) => _(r), g)

export default pipe
