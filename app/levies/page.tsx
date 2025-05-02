import { Download, PlusCircle } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardNav } from "@/components/dashboard-nav"
import { LevyTable } from "@/components/levy-table"

export default function LeviesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <div className="flex flex-1">
        <DashboardNav />
        <main className="flex-1 p-6 bg-gray-50">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">Levy Management</h1>
              <div className="flex gap-2">
                <Button variant="outline" asChild>
                  <Link href="/levies/export">
                    <Download className="mr-2 h-4 w-4" />
                    Export
                  </Link>
                </Button>
                <Button asChild>
                  <Link href="/levies/generate">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Generate Notices
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Administration Fund</CardTitle>
                  <CardDescription>Current balance and recent transactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-emerald-600 mb-4">$24,685.00</div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Last quarter levies collected:</span>
                      <span className="font-medium">$12,500.00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Expenses this quarter:</span>
                      <span className="font-medium">$8,320.00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Outstanding levies:</span>
                      <span className="font-medium">$1,850.00</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Capital Works Fund</CardTitle>
                  <CardDescription>Current balance and recent transactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-emerald-600 mb-4">$156,432.00</div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Last quarter levies collected:</span>
                      <span className="font-medium">$18,750.00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Expenses this quarter:</span>
                      <span className="font-medium">$5,200.00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Outstanding levies:</span>
                      <span className="font-medium">$2,750.00</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Levy Records</CardTitle>
                <CardDescription>Track and manage all levy payments for your building</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="all">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="all">All Levies</TabsTrigger>
                    <TabsTrigger value="paid">Paid</TabsTrigger>
                    <TabsTrigger value="outstanding">Outstanding</TabsTrigger>
                    <TabsTrigger value="overdue">Overdue</TabsTrigger>
                  </TabsList>
                  <TabsContent value="all" className="mt-4">
                    <LevyTable />
                  </TabsContent>
                  <TabsContent value="paid" className="mt-4">
                    <LevyTable status="paid" />
                  </TabsContent>
                  <TabsContent value="outstanding" className="mt-4">
                    <LevyTable status="outstanding" />
                  </TabsContent>
                  <TabsContent value="overdue" className="mt-4">
                    <LevyTable status="overdue" />
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
