import { FileText, FolderPlus, Upload } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardNav } from "@/components/dashboard-nav"
import { DocumentTable } from "@/components/document-table"

export default function DocumentsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <div className="flex flex-1">
        <DashboardNav />
        <main className="flex-1 p-6 bg-gray-50">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">Document Repository</h1>
              <div className="flex gap-2">
                <Button variant="outline" asChild>
                  <Link href="/documents/new-folder">
                    <FolderPlus className="mr-2 h-4 w-4" />
                    New Folder
                  </Link>
                </Button>
                <Button asChild>
                  <Link href="/documents/upload">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
              <Card className="bg-emerald-50 border-emerald-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-emerald-700">Meeting Minutes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <FileText className="h-8 w-8 text-emerald-600" />
                    <span className="text-sm font-medium">12 documents</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-blue-700">Financial Reports</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <FileText className="h-8 w-8 text-blue-600" />
                    <span className="text-sm font-medium">8 documents</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-amber-50 border-amber-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-amber-700">By-Laws</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <FileText className="h-8 w-8 text-amber-600" />
                    <span className="text-sm font-medium">3 documents</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-purple-50 border-purple-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-purple-700">Insurance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <FileText className="h-8 w-8 text-purple-600" />
                    <span className="text-sm font-medium">5 documents</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>All Documents</CardTitle>
                <CardDescription>Access and manage all documents for your strata scheme</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="all">
                  <TabsList className="grid w-full grid-cols-5">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="minutes">Minutes</TabsTrigger>
                    <TabsTrigger value="financial">Financial</TabsTrigger>
                    <TabsTrigger value="bylaws">By-Laws</TabsTrigger>
                    <TabsTrigger value="insurance">Insurance</TabsTrigger>
                  </TabsList>
                  <TabsContent value="all" className="mt-4">
                    <DocumentTable />
                  </TabsContent>
                  <TabsContent value="minutes" className="mt-4">
                    <DocumentTable category="minutes" />
                  </TabsContent>
                  <TabsContent value="financial" className="mt-4">
                    <DocumentTable category="financial" />
                  </TabsContent>
                  <TabsContent value="bylaws" className="mt-4">
                    <DocumentTable category="bylaws" />
                  </TabsContent>
                  <TabsContent value="insurance" className="mt-4">
                    <DocumentTable category="insurance" />
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
