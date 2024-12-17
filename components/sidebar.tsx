import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import Link from "next/link"

export function Sidebar() {
  return (
    <div className="w-64 border-r bg-background p-4 flex flex-col gap-4">
      <div className="flex items-center gap-2 px-2">
        <div className="w-8 h-8 bg-primary rounded-lg" />
        <span className="font-semibold">Prody</span>
      </div>
      
      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search..." className="pl-8" />
      </div>

      <nav className="space-y-2">
        {[
          { name: "Dashboard", count: null },
          { name: "Projects", count: "3/5" },
          { name: "Analytics", count: null },
          { name: "Reports", count: "New" },
          { name: "Extensions", count: null },
          { name: "Companies", count: "17" },
          { name: "People", count: "164" },
        ].map((item) => (
          <Link
            key={item.name}
            href="#"
            className="flex items-center justify-between px-2 py-2 text-sm rounded-lg hover:bg-accent"
          >
            <span>{item.name}</span>
            {item.count && (
              <span className="text-xs text-muted-foreground">{item.count}</span>
            )}
          </Link>
        ))}
      </nav>

      <div className="mt-auto space-y-4">
        <Link href="#" className="flex items-center px-2 py-2 text-sm">
          Help center
        </Link>
        <Link href="#" className="flex items-center px-2 py-2 text-sm">
          Notifications
          <span className="ml-auto bg-destructive text-destructive-foreground w-5 h-5 rounded-full text-xs flex items-center justify-center">
            3
          </span>
        </Link>
      </div>
    </div>
  )
}

