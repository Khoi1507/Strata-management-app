import Link from "next/link"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function HttpInfoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <main className="flex-1 p-6 bg-gray-50">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">HTTP Methods & Status Codes</h1>
            <Link href="/contact" className="text-emerald-600 hover:text-emerald-700 underline">
              Back to Contact Form
            </Link>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>HTTP Request Methods</CardTitle>
              <CardDescription>Different ways to interact with web resources</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Method</TableHead>
                    <TableHead>Purpose</TableHead>
                    <TableHead>Characteristics</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">GET</TableCell>
                    <TableCell>Retrieve data</TableCell>
                    <TableCell>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Data sent as URL parameters</li>
                        <li>Visible in browser history and logs</li>
                        <li>Can be bookmarked</li>
                        <li>Limited data size (URL length restrictions)</li>
                        <li>Should not change server state</li>
                        <li>Cacheable</li>
                      </ul>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">POST</TableCell>
                    <TableCell>Submit data</TableCell>
                    <TableCell>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Data sent in request body</li>
                        <li>Not visible in URL</li>
                        <li>Cannot be bookmarked</li>
                        <li>No size limitations</li>
                        <li>Can change server state</li>
                        <li>Not cacheable by default</li>
                      </ul>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">PUT</TableCell>
                    <TableCell>Update resources</TableCell>
                    <TableCell>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Replaces entire resource</li>
                        <li>Idempotent (same result if called multiple times)</li>
                      </ul>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">PATCH</TableCell>
                    <TableCell>Partial updates</TableCell>
                    <TableCell>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Updates part of a resource</li>
                        <li>Not necessarily idempotent</li>
                      </ul>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">DELETE</TableCell>
                    <TableCell>Remove resources</TableCell>
                    <TableCell>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Removes the specified resource</li>
                        <li>Idempotent</li>
                      </ul>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Common HTTP Status Codes</CardTitle>
              <CardDescription>Response codes that indicate the result of an HTTP request</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Code</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">200 OK</TableCell>
                    <TableCell>Success</TableCell>
                    <TableCell>Request succeeded</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">201 Created</TableCell>
                    <TableCell>Success</TableCell>
                    <TableCell>Request succeeded and a new resource was created</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">301 Moved Permanently</TableCell>
                    <TableCell>Redirection</TableCell>
                    <TableCell>Resource has been permanently moved to a new URL</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">302 Found</TableCell>
                    <TableCell>Redirection</TableCell>
                    <TableCell>Resource temporarily moved to a different URL</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">307 Temporary Redirect</TableCell>
                    <TableCell>Redirection</TableCell>
                    <TableCell>Temporary redirect that preserves the HTTP method</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">400 Bad Request</TableCell>
                    <TableCell>Client Error</TableCell>
                    <TableCell>Server cannot process the request due to client error</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">401 Unauthorized</TableCell>
                    <TableCell>Client Error</TableCell>
                    <TableCell>Authentication required</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">403 Forbidden</TableCell>
                    <TableCell>Client Error</TableCell>
                    <TableCell>Server understood but refuses to authorize</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">404 Not Found</TableCell>
                    <TableCell>Client Error</TableCell>
                    <TableCell>Requested resource not found</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">500 Internal Server Error</TableCell>
                    <TableCell>Server Error</TableCell>
                    <TableCell>Unexpected server error</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">503 Service Unavailable</TableCell>
                    <TableCell>Server Error</TableCell>
                    <TableCell>Server temporarily unable to handle request</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Redirects in Serverless Functions</CardTitle>
              <CardDescription>How redirects work in Next.js API routes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                In Next.js serverless functions (API routes), you can implement redirects using the
                <code className="bg-gray-100 px-1 rounded">NextResponse.redirect()</code> method. This allows you to
                send users to a different page after processing their request.
              </p>

              <div className="bg-gray-100 p-4 rounded-md font-mono text-sm">
                <pre>{`import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // Process form data
  const formData = await request.formData();
  
  // Save to database or perform other actions
  
  // Redirect to a thank you page with status 303 (See Other)
  return NextResponse.redirect(new URL("/contact/thank-you", request.url), 303);
}`}</pre>
              </div>

              <p className="text-sm text-muted-foreground">
                The 303 status code is commonly used for POST-to-GET redirects after form submissions. It tells the
                browser to follow the redirect with a GET request regardless of the original request method.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
