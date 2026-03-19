import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  const b = await req.json();
  await prisma.wholesaleLead.create({ data: { accountName: b.accountName, accountEmail: b.accountEmail, companyName: b.companyName, taxId: b.taxId || null, shippingAddress: b.shippingAddress, agreedToTerms: Boolean(b.agreedToTerms) } });
  return NextResponse.json({ ok: true });
}
