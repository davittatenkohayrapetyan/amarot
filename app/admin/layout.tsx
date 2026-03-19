import Link from 'next/link';
import { signOut } from '@/auth';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-paper"><header className="border-b"><div className="container-pad py-4 flex justify-between"><nav className="flex gap-4"><Link href="/admin">Dashboard</Link><Link href="/admin/products">Products</Link><Link href="/admin/posts">Posts</Link><Link href="/admin/settings">Homepage</Link></nav><form action={async()=>{'use server'; await signOut({redirectTo:'/admin/login'});}}><button>Sign out</button></form></div></header><main className="container-pad py-8">{children}</main></div>;
}
