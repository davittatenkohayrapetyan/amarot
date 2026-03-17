import { ProductCard } from '@/components/product-card';
import { getProducts } from '@/lib/data';

export default async function ShopPage({ searchParams }: { searchParams: Promise<{ q?: string; availability?: string; sort?: 'bestselling'|'price_asc'|'price_desc' }> }) {
  const s = await searchParams;
  const products = await getProducts(s);
  return (
    <div className="container-pad py-12">
      <p className="text-sm uppercase">Collection</p><h1 className="h2 mt-2">Shop All</h1><p className="mt-2">Explore our full range of sugar-free and all-natural snacks.</p>
      <form className="my-6 grid md:grid-cols-4 gap-3"><input name="q" placeholder="Search" className="px-3 py-2 rounded-xl border" defaultValue={s.q}/><select name="availability" className="px-3 py-2 rounded-xl border"><option value="">Availability</option><option value="in">In stock</option><option value="out">Out of stock</option></select><select name="sort" className="px-3 py-2 rounded-xl border"><option value="bestselling">Bestselling</option><option value="price_asc">Price ascending</option><option value="price_desc">Price descending</option></select><button className="bg-ink text-paper rounded-xl">Apply</button></form>
      <div className="grid md:grid-cols-3 gap-4">{products.map((p) => <ProductCard key={p.id} product={p} />)}</div>
    </div>
  );
}
