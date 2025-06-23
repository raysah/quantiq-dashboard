import { NextResponse } from 'next/server'
import yahooFinance from 'yahoo-finance2'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const symbol = searchParams.get('symbol') || 'AAPL'

  try {
    const quote = await yahooFinance.quote(symbol)
    return NextResponse.json({ symbol, price: quote.regularMarketPrice })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch quote' }, { status: 500 })
  }
}