import { PlusCircle } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardNav } from "@/components/dashboard-nav"
import { MaintenanceTable } from "@/components/maintenance-table"

export default function MaintenancePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <div className="flex flex-1">
        <DashboardNav />
        <main className="flex-1 p-6 bg-gray-50">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">Maintenance Requests</h1>
              <Button asChild>
                <Link href="/maintenance/new">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  New Request
                </Link>
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Maintenance Overview</CardTitle>
                <CardDescription>Track and manage all maintenance requests for your building</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="all">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="all">All Requests</TabsTrigger>
                    <TabsTrigger value="open">Open</TabsTrigger>
                    <TabsTrigger value="in-progress">In Progress</TabsTrigger>
                    <TabsTrigger value="completed">Completed</TabsTrigger>
                  </TabsList>
                  <TabsContent value="all" className="mt-4">
                    <MaintenanceTable />
                  </TabsContent>
                  <TabsContent value="open" className="mt-4">
                    <MaintenanceTable status="open" />
                  </TabsContent>
                  <TabsContent value="in-progress" className="mt-4">
                    <MaintenanceTable status="in-progress" />
                  </TabsContent>
                  <TabsContent value="completed" className="mt-4">
                    <MaintenanceTable status="completed" />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
