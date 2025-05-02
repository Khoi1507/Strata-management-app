import { MessageSquare } from "lucide-react"

export function RecentAnnouncements() {
  const announcements = [
    {
      id: 1,
      title: "Annual General Meeting Scheduled",
      content:
        "The Annual General Meeting will be held on May 15, 2025 at 7:00 PM in the building's common room. All owners are encouraged to attend.",
      date: "2025-04-10",
      author: "Sarah Johnson",
    },
    {
      id: 2,
      title: "Scheduled Water Shutdown",
      content:
        "There will be a scheduled water shutdown on April 20, 2025 from 9:00 AM to 12:00 PM for maintenance work. Please plan accordingly.",
      date: "2025-04-08",
      author: "Michael Chen",
    },
    {
      id: 3,
      title: "New Waste Management System",
      content:
        "Starting May 1, 2025, we will be implementing a new waste management system. Please see the attached document for details.",
      date: "2025-04-05",
      author: "David Wilson",
    },
    {
      id: 4,
      title: "Garden Maintenance Day",
      content:
        "We are organizing a garden maintenance day on April 25, 2025. Volunteers are welcome to help with planting and cleaning.",
      date: "2025-04-02",
      author: "Emma Thompson",
    },
  ]

  return (
    <div className="space-y-4">
      {announcements.map((announcement) => (
        <div key={announcement.id} className="flex items-start gap-4 p-4 border rounded-md">
          <div className="bg-blue-100 p-2 rounded-md">
            <MessageSquare className="h-5 w-5 text-blue-600" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-medium">{announcement.title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{announcement.content}</p>
            <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
              <span>{announcement.date}</span>
              <span>•</span>
              <span>By {announcement.author}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
