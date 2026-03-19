import Link from 'next/link';
import type { Product } from '@prisma/client';

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="card p-4">
      <div className="relative aspect-square rounded-xl bg-berryGrey mb-3">
        {product.featured && (
          <span className="absolute top-2 left-2 bg-matcha text-ink text-xs font-semibold px-2 py-0.5 rounded-full">Featured</span>
        )}
      </div>
      <h3 className="font-semibold"><Link href={`/shop/${product.slug}`} className="hover:text-softRed transition-colors">{product.title}</Link></h3>
      <p className="text-sm text-black/70">{product.cartonQuantity}</p>
      <p className="mt-2 font-heading">AMD {product.priceAmd.toLocaleString()}</p>
      <button className="mt-3 w-full rounded-xl bg-softRed text-paper py-2 transition-colors hover:bg-fadedRed disabled:opacity-40 disabled:hover:bg-softRed" disabled={!product.inStock}>{product.inStock ? 'Add to cart' : 'Out of stock'}</button>
    </div>
  );
}
