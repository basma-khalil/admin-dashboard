// Create a mock API
import { NextResponse } from 'next/server';
import data from '../data/geo-chart.json';

export async function GET() {
  return NextResponse.json(data);
}
