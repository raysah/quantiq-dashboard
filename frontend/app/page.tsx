'use client'
import { useEffect, useState } from 'react'
import MetricCard from './components/MetricCard' // adjust path as needed
import { FiTrendingUp, FiDollarSign, FiBarChart2, FiActivity, FiHome, FiAlertTriangle, FiSettings } from 'react-icons/fi'

const symbols = [
  'SPY', 'QQQ', 'VTI', 'DIA', 'IWM', 'ARKK',
  'EEM', 'XLF', 'XLK', 'XLV', 'XLE',
  'XLY', 'XLU', 'XLI', 'XLB', 'XLC',
  'VNQ', 'TLT', 'HYG'
]

export default function Home() {
  const [etfPrices, setEtfPrices] = useState<{ [symbol: string]: string }>({})

  useEffect(() => {
    async function fetchAllPrices() {
      const prices: { [symbol: string]: string } = {}

      await Promise.all(
        symbols.map(async (symbol) => {
          try {
            const res = await fetch(`/api/yfinance?symbol=${symbol}`)
            const data = await res.json()
            prices[symbol] = `$${Number(data.price).toLocaleString()}`
          } catch {
            prices[symbol] = 'Error'
          }
        })
      )

      setEtfPrices(prices)
    }

    fetchAllPrices()
  }, [])
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-6 shadow-md hidden md:block">
        <h2 className="text-xl font-bold mb-6">QuantIQ</h2>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-center space-x-2 px-3 py-2 rounded-md cursor-pointer transition-colors duration-200 ease-in-out hover:text-blue-600 hover:bg-gray-50">
            <FiHome />
            <span>Dashboard</span>
          </li>
          <li className="flex items-center space-x-2 px-3 py-2 rounded-md cursor-pointer transition-colors duration-200 ease-in-out hover:text-blue-600 hover:bg-gray-50">
            <FiActivity />
            <span>Signals</span>
          </li>
          <li className="flex items-center space-x-2 px-3 py-2 rounded-md cursor-pointer transition-colors duration-200 ease-in-out hover:text-blue-600 hover:bg-gray-50">
            <FiAlertTriangle />
            <span>Risk</span>
          </li>
          <li className="flex items-center space-x-2 px-3 py-2 rounded-md cursor-pointer transition-colors duration-200 ease-in-out hover:text-blue-600 hover:bg-gray-50">
            <FiSettings />
            <span>Settings</span>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <div className="bg-white px-4 py-2 rounded shadow">User Profile</div>
        </div>

        {/* Account Summary Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">📊 Account Summary</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricCard title="P&L Summary" value="$12,450" onClick={() => alert("P&L clicked")}>
              <FiTrendingUp className="text-green-500 text-2xl" />
            </MetricCard>

            <MetricCard title="Net Asset Value" value="$108,230" onClick={() => alert("NAV clicked")}>
              <FiDollarSign className="text-blue-500 text-2xl" />
            </MetricCard>

            <MetricCard title="Market Exposure" value="+42%" onClick={() => alert("Exposure clicked")}>
              <FiBarChart2 className="text-purple-500 text-2xl" />
            </MetricCard>

            <MetricCard title="Risk Level" value="Moderate" onClick={() => alert("Risk clicked")}>
              <FiActivity className="text-orange-400 text-2xl" />
            </MetricCard>
          </div>
        </section>

        {/* Live ETF Prices Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4">📈 Live ETF Prices</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {symbols.map((symbol) => (
              <MetricCard
                key={symbol}
                title={`${symbol} Live Price`}
                value={etfPrices[symbol] || 'Loading...'}
                onClick={() => alert(`${symbol} clicked`)}
              >
                <FiTrendingUp className="text-green-500 text-2xl" />
              </MetricCard>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}