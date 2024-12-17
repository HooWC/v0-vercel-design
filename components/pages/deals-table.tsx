import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Filter, Search, Plus } from 'lucide-react'

const deals = [
    {
        id: "01",
        company: "Acme",
        contact: "Tyra Dhillon",
        email: "tyradhillon@acme.com",
        value: "$3,912",
        source: "Social Networks"
    },
    {
        id: "02",
        company: "Academic Project",
        contact: "Brittni Lando",
        email: "lando@academicproject.com",
        value: "$2,345",
        source: "Outreach"
    },
    {
        id: "03",
        company: "Aimbus",
        contact: "Kevin Chen",
        email: "chen@aimbus.com",
        value: "$13,864",
        source: "Referrals"
    },
    {
        id: "04",
        company: "Big Bang Production",
        contact: "Josh Ryan",
        email: "joshryan@gmail.com",
        value: "$6,314",
        source: "Word-of-mouth"
    },
    {
        id: "05",
        company: "Book Launch",
        contact: "Chieko Chute",
        email: "chieko67@booklaunch.com",
        value: "$5,982",
        source: "Outreach"
    }
]

export function DealsTable() {
    return (
        <div>
            <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <select className="h-9 rounded-md border bg-transparent px-3 text-sm">
                        <option>All deals</option>
                    </select>
                    <Button variant="outline" size="sm">
                        <Filter className="mr-2 h-4 w-4" />
                        Filter
                    </Button>
                    <Button variant="outline" size="sm">
                        Sort
                    </Button>
                    <Button variant="outline" size="sm">
                        <Search className="mr-2 h-4 w-4" />
                        Search
                    </Button>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline">Export</Button>
                    <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        Add New
                    </Button>
                </div>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-12">
                            <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                        </TableHead>
                        <TableHead className="w-12">ID</TableHead>
                        <TableHead>Deals</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Value</TableHead>
                        <TableHead>Source</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {deals.map((deal) => (
                        <TableRow key={deal.id}>
                            <TableCell>
                                <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                            </TableCell>
                            <TableCell>{deal.id}</TableCell>
                            <TableCell>{deal.company}</TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <Avatar className="h-6 w-6">
                                        <AvatarImage src="/placeholder.svg" />
                                        <AvatarFallback>
                                            {deal.contact.split(' ').map(n => n[0]).join('')}
                                        </AvatarFallback>
                                    </Avatar>
                                    {deal.contact}
                                </div>
                            </TableCell>
                            <TableCell>{deal.email}</TableCell>
                            <TableCell>{deal.value}</TableCell>
                            <TableCell>
                                <Badge variant="secondary">{deal.source}</Badge>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

