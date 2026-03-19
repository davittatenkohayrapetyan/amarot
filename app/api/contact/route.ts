import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request){const b=await req.json(); await prisma.contactInquiry.create({data:{name:b.name,email:b.email,phone:b.phone||null,comment:b.comment}}); return NextResponse.json({ok:true});}
