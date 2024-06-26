// Create a mock API
import { NextResponse } from 'next/server';
import data from '@/app/data/api/transactions.json';

export async function GET() {
  return NextResponse.json(data);
}
