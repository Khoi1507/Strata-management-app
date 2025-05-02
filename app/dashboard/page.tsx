import { Calendar, DollarSign, FileText, MessageSquare, PenToolIcon as Tool, Users } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MaintenanceRequestList } from "@/components/maintenance-request-list"
import { RecentAnnouncements } from "@/components/recent-announcements"
import { UpcomingMeetings } from "@/components/upcoming-meetings"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardNav } from "@/components/dashboard-nav"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <div className="flex flex-1">
        <DashboardNav />
        <main className="flex-1 p-6 bg-gray-50">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <div className="flex items-center gap-2">
                <Button variant="outline">
                  <Calendar className="mr-2 h-4 w-4" />
                  April 2025
                </Button>
                <Button>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  New Announcement
                </Button>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Administration Fund</CardTitle>
                  <DollarSign className="h-4 w-4 text-emerald-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$24,685.00</div>
                  <p className="text-xs text-muted-foreground">+2.5% from last quarter</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Capital Works Fund</CardTitle>
                  <DollarSign className="h-4 w-4 text-emerald-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$156,432.00</div>
                  <p className="text-xs text-muted-foreground">+5.2% from last quarter</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Open Maintenance</CardTitle>
                  <Tool className="h-4 w-4 text-emerald-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">7</div>
                  <p className="text-xs text-muted-foreground">3 high priority</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Upcoming Meetings</CardTitle>
                  <Calendar className="h-4 w-4 text-emerald-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2</div>
                  <p className="text-xs text-muted-foreground">Next: April 20, 2025</p>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="maintenance">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="maintenance">Maintenance Requests</TabsTrigger>
                <TabsTrigger value="announcements">Recent Announcements</TabsTrigger>
                <TabsTrigger value="meetings">Upcoming Meetings</TabsTrigger>
              </TabsList>
              <TabsContent value="maintenance" className="bg-white p-4 rounded-md shadow-sm">
                <MaintenanceRequestList />
              </TabsContent>
              <TabsContent value="announcements" className="bg-white p-4 rounded-md shadow-sm">
                <RecentAnnouncements />
              </TabsContent>
              <TabsContent value="meetings" className="bg-white p-4 rounded-md shadow-sm">
                <UpcomingMeetings />
              </TabsContent>
            </Tabs>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common tasks for committee members</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <Button variant="outline" className="justify-start" asChild>
                    <Link href="/maintenance/new">
                      <Tool className="mr-2 h-4 w-4" />
                      Create Maintenance Request
                    </Link>
                  </Button>
                  <Button variant="outline" className="justify-start" asChild>
                    <Link href="/documents/upload">
                      <FileText className="mr-2 h-4 w-4" />
                      Upload Document
                    </Link>
                  </Button>
                  <Button variant="outline" className="justify-start" asChild>
                    <Link href="/levies/generate">
                      <DollarSign className="mr-2 h-4 w-4" />
                      Generate Levy Notices
                    </Link>
                  </Button>
                  <Button variant="outline" className="justify-start" asChild>
                    <Link href="/meetings/schedule">
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule Meeting
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Committee Members</CardTitle>
                  <CardDescription>Current strata committee</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Users className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-medium">Sarah Johnson</p>
                      <p className="text-sm text-muted-foreground">Chairperson</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Users className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-medium">Michael Chen</p>
                      <p className="text-sm text-muted-foreground">Secretary</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Users className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-medium">David Wilson</p>
                      <p className="text-sm text-muted-foreground">Treasurer</p>
                    </div>
                  </div>
                  <Button variant="link" className="justify-start px-0" asChild>
                    <Link href="/committee">View All Committee Members</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
