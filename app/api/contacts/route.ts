import { NextResponse } from 'next/server';
import data from '@/data/api/contacts.json';

export async function GET() {
  return NextResponse.json({ hello: 'world' });
}
