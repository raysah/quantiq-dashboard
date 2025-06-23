'use client'

type MetricCardProps = {
  title: string
  value: string
  onClick?: () => void
  children?: React.ReactNode
}

export default function MetricCard({ title, value, onClick, children }: MetricCardProps) {
  return (
    <div
      className="bg-white p-4 rounded shadow hover:shadow-lg cursor-pointer transition"
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-gray-600">{value}</p>
        </div>
        {children}
      </div>
    </div>
  )
}