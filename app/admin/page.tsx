import { prisma } from '@/lib/prisma';

export default async function AdminDashboard(){const [products,posts,leads]=await Promise.all([prisma.product.count(),prisma.blogPost.count(),prisma.wholesaleLead.count()]); return <div><h1 className="h2">Dashboard</h1><div className="grid md:grid-cols-3 gap-4 mt-4">{[['Products',products],['Posts',posts],['Wholesale leads',leads]].map(([n,v])=><div key={String(n)} className="card p-4"><p>{n}</p><p className="text-2xl font-heading">{Number(v)}</p></div>)}</div></div>}
