import { Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"

export function UpcomingMeetings() {
  const meetings = [
    {
      id: 1,
      title: "Annual General Meeting",
      date: "2025-05-15",
      time: "19:00",
      location: "Building Common Room",
      description: "Annual meeting to discuss budget, elect committee members, and address other matters.",
    },
    {
      id: 2,
      title: "Strata Committee Meeting",
      date: "2025-04-20",
      time: "18:30",
      location: "Building Common Room",
      description: "Regular committee meeting to discuss ongoing maintenance and financial matters.",
    },
  ]

  return (
    <div className="space-y-4">
      {meetings.map((meeting) => (
        <div key={meeting.id} className="flex items-start gap-4 p-4 border rounded-md">
          <div className="bg-purple-100 p-2 rounded-md">
            <Calendar className="h-5 w-5 text-purple-600" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-medium">{meeting.title}</h3>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mt-1">
              <p className="text-sm font-medium">
                {meeting.date} at {meeting.time}
              </p>
              <p className="text-sm text-muted-foreground">{meeting.location}</p>
            </div>
            <p className="text-sm text-muted-foreground mt-2">{meeting.description}</p>
          </div>
          <Button size="sm">RSVP</Button>
        </div>
      ))}
    </div>
  )
}
