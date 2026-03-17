import type { MetadataRoute } from 'next';
import { prisma } from '@/lib/prisma';
import { siteUrl } from '@/lib/utils';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [products, posts] = await Promise.all([prisma.product.findMany(), prisma.blogPost.findMany({ where: { state: 'PUBLISHED' } })]);
  const staticRoutes = ['', '/shop', '/wholesale', '/ingredients', '/about', '/contact', '/read'];
  return [
    ...staticRoutes.map((r) => ({ url: `${siteUrl}${r}`, lastModified: new Date() })),
    ...products.map((p) => ({ url: `${siteUrl}/shop/${p.slug}`, lastModified: p.updatedAt })),
    ...posts.map((p) => ({ url: `${siteUrl}/read/${p.slug}`, lastModified: p.updatedAt }))
  ];
}
