import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { ProductCard } from '@/components/product-card';

export default async function HomePage() {
  const featured = await prisma.product.findMany({ where: { featured: true }, take: 3, orderBy: { sortOrder: 'asc' } });
  const latest = await prisma.blogPost.findMany({ where: { state: 'PUBLISHED' }, take: 3, orderBy: { publishDate: 'desc' } });
  return (
    <div>
      <section className="container-pad py-16"><h1 className="font-heading text-5xl mb-4">Snacks - made better.</h1><p className="max-w-xl">Plant-based energy bars and energy balls made with whole, natural ingredients.</p><Link href="/shop" className="inline-block mt-6 bg-ink text-paper px-5 py-3 rounded-xl">Shop now</Link></section>
      <section className="container-pad py-10"><h2 className="h2 mb-6">Featured products</h2><div className="grid md:grid-cols-3 gap-4">{featured.map((p) => <ProductCard key={p.id} product={p} />)}</div></section>
      <section className="container-pad py-14 text-center"><h2 className="h2">For everyday energy and enjoyment.</h2><p className="max-w-3xl mx-auto mt-3">Amarot is built on one uncompromising principle: clean, natural ingredients, thoughtfully balanced. No added sugar. No artificial flavors. Just snacks - made better.</p><button className="mt-6 rounded-xl border border-ink px-5 py-2">Bundle & save</button></section>
      <section className="container-pad py-10 grid md:grid-cols-3 gap-4">{['No added sugar — Sweetness comes only from whole, natural ingredients.','No artificial additives — No artificial flavors, colors, or preservatives - ever.','Whole ingredients — Nuts, seeds, fruits, and plant-based components you can recognize.'].map((t)=><div key={t} className="card p-5">{t}</div>)}</section>
      <section className="container-pad py-10"><h2 className="h2 mb-5">Latest from Read</h2><div className="grid md:grid-cols-3 gap-4">{latest.map((post)=><Link className="card p-5 block" key={post.id} href={`/read/${post.slug}`}><h3 className="font-semibold">{post.title}</h3><p className="text-sm mt-2">{post.excerpt}</p></Link>)}</div></section>
    </div>
  );
}
