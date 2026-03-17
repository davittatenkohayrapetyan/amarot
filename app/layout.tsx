import type { Metadata } from 'next';
import './globals.css';
import { siteUrl } from '@/lib/utils';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Amarot | Snacks - made better.', template: '%s | Amarot' },
  description: 'Plant-based energy bars and balls with no added sugar.',
  openGraph: { title: 'Amarot', description: 'Snacks - made better.', url: siteUrl, siteName: 'Amarot', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Amarot', description: 'Snacks - made better.' },
  alternates: { canonical: '/' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
