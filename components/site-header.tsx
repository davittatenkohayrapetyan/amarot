import Link from 'next/link';
import { Search, ShoppingBag } from 'lucide-react';

export function SiteHeader() {
  const links = ['Shop All', 'Wholesale', 'Read', 'Ingredients', 'About', 'Contact'];
  const paths = ['/shop', '/wholesale', '/read', '/ingredients', '/about', '/contact'];
  return (
    <header className="border-b border-black/10 bg-paper sticky top-0 z-30">
      <div className="container-pad py-4 flex items-center justify-between gap-4">
        <Link href="/" className="font-heading text-xl">AMAROT</Link>
        <nav className="hidden md:flex gap-5 text-sm">
          {links.map((label, i) => <Link key={label} href={paths[i]} className="transition-colors hover:text-softRed">{label}</Link>)}
        </nav>
        <div className="flex gap-3"><Search size={18}/><ShoppingBag size={18}/></div>
      </div>
    </header>
  );
}
