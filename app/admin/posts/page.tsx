import Link from 'next/link';
import { prisma } from '@/lib/prisma';

export default async function AdminPosts(){const posts=await prisma.blogPost.findMany({orderBy:{createdAt:'desc'}}); return <div><h1 className="h2 mb-4">Posts</h1><Link className="underline" href="/admin/posts/new">Add post</Link><div className="mt-4 space-y-2">{posts.map(p=><div key={p.id} className="card p-3 flex justify-between"><span>{p.title}</span><Link href={`/admin/posts/${p.id}`}>Edit</Link></div>)}</div></div>}
