import { Eye } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface MaintenanceTableProps {
  status?: string
}

export function MaintenanceTable({ status }: MaintenanceTableProps) {
  const requests = [
    {
      id: 1,
      title: "Leaking roof in common area",
      location: "Building entrance",
      status: "open",
      priority: "high",
      date: "2025-04-10",
      reporter: "Sarah Johnson",
    },
    {
      id: 2,
      title: "Broken intercom system",
      location: "Main entrance",
      status: "in-progress",
      priority: "medium",
      date: "2025-04-08",
      reporter: "Michael Chen",
    },
    {
      id: 3,
      title: "Faulty lighting in parking area",
      location: "Basement parking",
      status: "open",
      priority: "high",
      date: "2025-04-05",
      reporter: "David Wilson",
    },
    {
      id: 4,
      title: "Cracked tiles in lobby",
      location: "Ground floor lobby",
      status: "open",
      priority: "low",
      date: "2025-04-02",
      reporter: "Emma Thompson",
    },
    {
      id: 5,
      title: "Malfunctioning elevator",
      location: "Building elevator #2",
      status: "in-progress",
      priority: "high",
      date: "2025-03-30",
      reporter: "James Rodriguez",
    },
    {
      id: 6,
      title: "Broken window in stairwell",
      location: "3rd floor stairwell",
      status: "completed",
      priority: "medium",
      date: "2025-03-25",
      reporter: "Sarah Johnson",
    },
    {
      id: 7,
      title: "Water damage in gym",
      location: "Gym ceiling",
      status: "completed",
      priority: "high",
      date: "2025-03-20",
      reporter: "Michael Chen",
    },
  ]

  const filteredRequests = status ? requests.filter((r) => r.status === status) : requests

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Priority</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Reporter</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredRequests.map((request) => (
          <TableRow key={request.id}>
            <TableCell className="font-medium">{request.id}</TableCell>
            <TableCell>{request.title}</TableCell>
            <TableCell>{request.location}</TableCell>
            <TableCell>
              <Badge
                variant={
                  request.status === "open" ? "default" : request.status === "in-progress" ? "secondary" : "outline"
                }
              >
                {request.status}
              </Badge>
            </TableCell>
            <TableCell>
              <Badge
                variant={
                  request.priority === "high" ? "destructive" : request.priority === "medium" ? "default" : "outline"
                }
              >
                {request.priority}
              </Badge>
            </TableCell>
            <TableCell>{request.date}</TableCell>
            <TableCell>{request.reporter}</TableCell>
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
