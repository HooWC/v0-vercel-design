import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Header() {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-lg bg-primary/10">
            <div className="h-full w-full p-2">
              {/* Company icon would go here */}
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">House Spectrum Ltd</h1>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Badge variant="secondary">Certified</Badge>
              <div className="flex items-center gap-2">
                <Avatar className="h-5 w-5">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>JP</AvatarFallback>
                </Avatar>
                <span>Jessica Parker</span>
              </div>
              <span>Edited 7 hrs ago</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <MetricCard label="Sales" value="5.3" total="10" color="blue" />
          <MetricCard label="Profit" value="2.4" total="10" color="red" />
          <MetricCard label="Customer" value="7.8" total="10" color="cyan" />
        </div>
      </div>
    </div>
  )
}

function MetricCard({ label, value, total, color }: { 
  label: string
  value: string
  total: string
  color: 'blue' | 'red' | 'cyan'
}) {
  const colors = {
    blue: 'bg-blue-500',
    red: 'bg-red-500',
    cyan: 'bg-cyan-500'
  }

  return (
    <div className="flex flex-col items-end">
      <span className="text-sm text-muted-foreground">{label}</span>
      <div className="flex items-center gap-1">
        <span className="text-xl font-semibold">{value}</span>
        <span className="text-sm text-muted-foreground">/{total}</span>
      </div>
      <div className="mt-1 h-1 w-24 rounded-full bg-muted">
        <div 
          className={`h-full rounded-full ${colors[color]}`} 
          style={{ width: `${(Number(value) / Number(total)) * 100}%` }}
        />
      </div>
    </div>
  )
}

