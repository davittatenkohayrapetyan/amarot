import { AnnouncementBar } from '@/components/announcement-bar';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { getAnnouncements } from '@/lib/data';

export default async function PublicLayout({ children }: { children: React.ReactNode }) {
  const messages = await getAnnouncements();
  return (
    <>
      <AnnouncementBar messages={messages.length ? messages : ['Snacks - made better.']} />
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
