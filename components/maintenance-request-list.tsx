import { Clock, PenToolIcon as Tool } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function MaintenanceRequestList() {
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
  ]

  return (
    <div className="space-y-4">
      {requests.map((request) => (
        <div key={request.id} className="flex items-start gap-4 p-4 border rounded-md">
          <div className="bg-emerald-100 p-2 rounded-md">
            <Tool className="h-5 w-5 text-emerald-600" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="font-medium truncate">{request.title}</h3>
              <Badge
                variant={
                  request.priority === "high" ? "destructive" : request.priority === "medium" ? "default" : "outline"
                }
              >
                {request.priority}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">{request.location}</p>
            <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span>Reported on {request.date}</span>
              <span>•</span>
              <span>By {request.reporter}</span>
            </div>
          </div>
          <Button size="sm" variant={request.status === "open" ? "default" : "outline"}>
            {request.status === "open" ? "Assign" : "View Details"}
          </Button>
        </div>
      ))}
    </div>
  )
}
