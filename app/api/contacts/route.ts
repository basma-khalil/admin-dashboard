// Create a mock API
import { NextResponse } from 'next/server';
import data from '@/app/data/api/contacts.json';

export async function GET() {
  return NextResponse.json(data);
}
