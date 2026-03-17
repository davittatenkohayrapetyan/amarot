import Link from 'next/link';
import { prisma } from '@/lib/prisma';

export default async function AdminProducts(){const products=await prisma.product.findMany({orderBy:{createdAt:'desc'}}); return <div><h1 className="h2 mb-4">Products</h1><Link className="underline" href="/admin/products/new">Add product</Link><div className="mt-4 space-y-2">{products.map(p=><div key={p.id} className="card p-3 flex justify-between"><span>{p.title}</span><Link href={`/admin/products/${p.id}`}>Edit</Link></div>)}</div></div>}
