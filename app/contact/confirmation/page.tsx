import Link from "next/link"
import dynamic from "next/dynamic"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Dynamically import the client component with suspense
const ConfirmationDetails = dynamic(() => import("@/components/confirmation-details").then(mod => mod.default), {
  ssr: false, // Disable server-side rendering for this component
  loading: () => <div className="p-4 text-center">Loading confirmation details...</div>
})

export default function ConfirmationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <main className="flex-1 p-6 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="bg-emerald-50">
              <CardTitle className="text-emerald-700">Message Received</CardTitle>
              <CardDescription>Thank you for contacting StrataSphere</CardDescription>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <ConfirmationDetails />
            </CardContent>
            <CardFooter className="border-t pt-6">
              <Button asChild className="w-full">
                <Link href="/contact">Return to Contact Page</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}
