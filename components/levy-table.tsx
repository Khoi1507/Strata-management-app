import { Eye } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface LevyTableProps {
  status?: string
}

export function LevyTable({ status }: LevyTableProps) {
  const levies = [
    {
      id: 1,
      unit: "Unit 1",
      owner: "John Smith",
      type: "Administration",
      amount: 750.0,
      dueDate: "2025-04-30",
      status: "paid",
      paymentDate: "2025-04-05",
    },
    {
      id: 2,
      unit: "Unit 2",
      owner: "Jane Doe",
      type: "Capital Works",
      amount: 1250.0,
      dueDate: "2025-04-30",
      status: "outstanding",
      paymentDate: null,
    },
    {
      id: 3,
      unit: "Unit 3",
      owner: "Emma Thompson",
      type: "Administration",
      amount: 750.0,
      dueDate: "2025-04-30",
      status: "paid",
      paymentDate: "2025-04-10",
    },
    {
      id: 4,
      unit: "Unit 4",
      owner: "Robert Johnson",
      type: "Capital Works",
      amount: 1250.0,
      dueDate: "2025-04-30",
      status: "outstanding",
      paymentDate: null,
    },
    {
      id: 5,
      unit: "Unit 5",
      owner: "Michael Chen",
      type: "Administration",
      amount: 750.0,
      dueDate: "2025-04-30",
      status: "paid",
      paymentDate: "2025-04-08",
    },
    {
      id: 6,
      unit: "Unit 6",
      owner: "Sarah Williams",
      type: "Capital Works",
      amount: 1250.0,
      dueDate: "2025-03-31",
      status: "overdue",
      paymentDate: null,
    },
    {
      id: 7,
      unit: "Unit 7",
      owner: "David Wilson",
      type: "Administration",
      amount: 750.0,
      dueDate: "2025-04-30",
      status: "paid",
      paymentDate: "2025-04-15",
    },
  ]

  const filteredLevies = status ? levies.filter((l) => l.status === status) : levies

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Unit</TableHead>
          <TableHead>Owner</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Due Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Payment Date</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredLevies.map((levy) => (
          <TableRow key={levy.id}>
            <TableCell className="font-medium">{levy.id}</TableCell>
            <TableCell>{levy.unit}</TableCell>
            <TableCell>{levy.owner}</TableCell>
            <TableCell>{levy.type}</TableCell>
            <TableCell>${levy.amount.toFixed(2)}</TableCell>
            <TableCell>{levy.dueDate}</TableCell>
            <TableCell>
              <Badge
                variant={
                  levy.status === "paid" ? "success" : levy.status === "outstanding" ? "secondary" : "destructive"
                }
              >
                {levy.status}
              </Badge>
            </TableCell>
            <TableCell>{levy.paymentDate || "-"}</TableCell>
            <TableCell className="text-right">
              <Button size="icon" variant="ghost">
                <Eye className="h-4 w-4" />
                <span className="sr-only">View details</span>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
