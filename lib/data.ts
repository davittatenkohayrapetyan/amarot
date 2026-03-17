import { prisma } from '@/lib/prisma';
import type { SortOption } from '@/lib/types';

export async function getAnnouncements() {
  const rows = await prisma.announcement.findMany({ where: { active: true }, orderBy: { sortOrder: 'asc' } });
  return rows.map((r) => r.message);
}

export async function getProducts(opts?: { q?: string; availability?: string; sort?: SortOption }) {
  const where = {
    ...(opts?.q ? { OR: [{ title: { contains: opts.q, mode: 'insensitive' as const } }, { tags: { has: opts.q.toLowerCase() } }] } : {}),
    ...(opts?.availability === 'in' ? { inStock: true } : {}),
    ...(opts?.availability === 'out' ? { inStock: false } : {})
  };
  const orderBy = opts?.sort === 'price_asc' ? { priceAmd: 'asc' as const } : opts?.sort === 'price_desc' ? { priceAmd: 'desc' as const } : { sortOrder: 'asc' as const };
  return prisma.product.findMany({ where, orderBy });
}
