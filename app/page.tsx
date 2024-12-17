import { Sidebar } from '../components/pages/sidebar'
import { Header } from '../components/pages/header'
import { BudgetChart } from '../components/pages/budget-chart'
import { DealsTable } from '../components/pages/deals-table'

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