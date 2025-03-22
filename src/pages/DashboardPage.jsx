import StatsCard from '../components/StatsCard'
import { Chart } from 'chart.js/auto'

export default function DashboardPage() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <StatsCard 
          title="Win Rate" 
          value="68.2%" 
          icon="📈"
        />
        <StatsCard
          title="Aylık Net Kâr"
          value="$2,420"
          icon="💰"
        />
        <StatsCard
          title="Risk/Reward"
          value="1:2.8"
          icon="⚖️"
        />
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-xl font-bold mb-4">Equity Curve</h3>
        <canvas id="myChart"></canvas>
      </div>
    </div>
  )
}