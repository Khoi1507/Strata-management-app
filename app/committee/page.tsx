import { Mail, Phone, PlusCircle } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardNav } from "@/components/dashboard-nav"

export default function CommitteePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <div className="flex flex-1">
        <DashboardNav />
        <main className="flex-1 p-6 bg-gray-50">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">Committee Members</h1>
              <Button asChild>
                <Link href="/committee/add">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add Member
                </Link>
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Sarah Johnson</CardTitle>
                  <CardDescription>Chairperson</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">sarah.johnson@example.com</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">0412 345 678</span>
                    </div>
                    <div className="text-sm text-muted-foreground mt-2">
                      <p>Unit 12</p>
                      <p>Committee member since 2022</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Michael Chen</CardTitle>
                  <CardDescription>Secretary</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">michael.chen@example.com</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">0423 456 789</span>
                    </div>
                    <div className="text-sm text-muted-foreground mt-2">
                      <p>Unit 5</p>
                      <p>Committee member since 2023</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>David Wilson</CardTitle>
                  <CardDescription>Treasurer</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">david.wilson@example.com</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">0434 567 890</span>
                    </div>
                    <div className="text-sm text-muted-foreground mt-2">
                      <p>Unit 8</p>
                      <p>Committee member since 2021</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Emma Thompson</CardTitle>
                  <CardDescription>Committee Member</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">emma.thompson@example.com</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">0445 678 901</span>
                    </div>
                    <div className="text-sm text-muted-foreground mt-2">
                      <p>Unit 3</p>
                      <p>Committee member since 2023</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>James Rodriguez</CardTitle>
                  <CardDescription>Committee Member</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">james.rodriguez@example.com</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">0456 789 012</span>
                    </div>
                    <div className="text-sm text-muted-foreground mt-2">
                      <p>Unit 15</p>
                      <p>Committee member since 2022</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Committee Information</CardTitle>
                <CardDescription>As per the Strata Schemes Management Act (2015)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  The strata committee is elected at each annual general meeting (AGM) and consists of lot owners or
                  nominated individuals who represent the owners corporation.
                </p>
                <div>
                  <h3 className="font-semibold mb-2">Key Responsibilities:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Managing the day-to-day operations of the strata scheme</li>
                    <li>Administering the common property</li>
                    <li>Managing finances and levy collection</li>
                    <li>Ensuring compliance with by-laws</li>
                    <li>Organizing repairs and maintenance</li>
                    <li>Keeping records and documentation</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Committee Roles:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <span className="font-medium">Chairperson:</span> Presides over meetings and ensures proper
                      procedures are followed
                    </li>
                    <li>
                      <span className="font-medium">Secretary:</span> Handles correspondence, keeps records, and
                      prepares meeting notices
                    </li>
                    <li>
                      <span className="font-medium">Treasurer:</span> Manages financial records, levy collection, and
                      payment of invoices
                    </li>
                  </ul>
                </div>
                <p className="text-sm text-muted-foreground">
                  The committee can have up to 9 members as specified by the Strata Schemes Management Act (2015).
                </p>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
