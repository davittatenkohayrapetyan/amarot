import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { differenceInMinutes } from 'date-fns';

export default async function ReadPage(){const posts=await prisma.blogPost.findMany({where:{state:'PUBLISHED'}, orderBy:{publishDate:'desc'}});return <div className="container-pad py-12"><h1 className="h2 mb-6">Read</h1><div className="grid gap-4">{posts.map((p)=>{const mins=Math.max(2,Math.round(p.body.split(' ').length/220));return <Link key={p.id} href={`/read/${p.slug}`} className="card p-5 block"><p className="text-xs">{p.categories.join(', ')} · {mins} min read</p><h2 className="font-semibold mt-1">{p.title}</h2><p className="text-sm mt-2">{p.excerpt}</p><p className="text-xs mt-2">Tags: {p.tags.join(', ')}</p></Link>})}</div></div>}
