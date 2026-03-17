import Link from 'next/link';
import type { Product } from '@prisma/client';

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="card p-4">
      <div className="aspect-square rounded-xl bg-berryGrey mb-3"/>
      <h3 className="font-semibold"><Link href={`/shop/${product.slug}`}>{product.title}</Link></h3>
      <p className="text-sm text-black/70">{product.cartonQuantity}</p>
      <p className="mt-2">AMD {product.priceAmd.toLocaleString()}</p>
      <button className="mt-3 w-full rounded-xl bg-ink text-paper py-2 disabled:opacity-40" disabled={!product.inStock}>{product.inStock ? 'Add to cart' : 'Out of stock'}</button>
    </div>
  );
}
