import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { ProductCard } from '@/components/product-card';

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await prisma.product.findUnique({ where: { slug } });
  if (!product) return notFound();
  const related = await prisma.product.findMany({ where: { id: { not: product.id } }, take: 3 });
  return <div className="container-pad py-12"><div className="grid md:grid-cols-2 gap-8"><div className="space-y-3"><div className="aspect-square bg-berryGrey rounded-2xl"/>{product.galleryImages.slice(0,3).map((g)=><div key={g} className="h-24 bg-berryGrey rounded-xl"/>)}</div><div><h1 className="h2">{product.title}</h1><p className="mt-2">AMD {product.priceAmd.toLocaleString()}</p><div className="mt-4 flex gap-2"><input type="number" defaultValue={1} min={1} className="w-16 border rounded-xl px-2"/><button className="bg-ink text-paper px-4 rounded-xl">Add to cart</button><button className="border border-ink px-4 rounded-xl">Buy now</button></div><p className="text-sm mt-2">Checkout coming soon. Use contact form for immediate orders.</p><p className="mt-4">{product.fullDescription}</p><details className="mt-3"><summary>Ingredients</summary><p>{product.ingredients}</p></details><details><summary>Nutrition & allergens</summary><p>{product.nutritionAllergens}</p></details><details><summary>Care</summary><p>{product.care}</p></details></div></div><section className="mt-12"><h2 className="h2 mb-4">We think you’ll also love</h2><div className="grid md:grid-cols-3 gap-4">{related.map((p)=><ProductCard key={p.id} product={p}/>)}</div></section></div>;
}
