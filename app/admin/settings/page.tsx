import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';

export default async function SettingsPage(){const announcements=await prisma.announcement.findMany({orderBy:{sortOrder:'asc'}}); async function addMessage(formData:FormData){'use server'; await prisma.announcement.create({data:{message:String(formData.get('message')),sortOrder:announcements.length+1,active:true}}); redirect('/admin/settings');}
return <div><h1 className="h2 mb-4">Homepage settings</h1><div className="space-y-2">{announcements.map(a=><div key={a.id} className="card p-3">{a.message}</div>)}</div><form action={addMessage} className="mt-4 flex gap-2"><input name="message" className="border rounded p-2 flex-1" placeholder="New announcement"/><button className="bg-ink text-paper rounded px-3">Add</button></form></div>}
