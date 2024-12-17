import { Sidebar } from '../components/Sidebar'
import { Header } from '../components/header'
import { BudgetChart } from '../components/budget-chart.tjs'
import { DealsTable } from '../components/deals-table'

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto p-6">
          <Header />
          <BudgetChart />
          <DealsTable />
        </div>
      </main>
    </div>
  )
}