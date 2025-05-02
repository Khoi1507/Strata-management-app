import Link from "next/link"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle } from 'lucide-react'

export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <main className="flex-1 p-6 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="bg-emerald-50">
              <div className="flex items-center justify-center mb-4">
                <CheckCircle className="h-16 w-16 text-emerald-600" />
              </div>
              <CardTitle className="text-center text-emerald-700">Thank You!</CardTitle>
              <CardDescription className="text-center">Your message has been successfully submitted</CardDescription>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <p className="text-center">We have received your inquiry and will get back to you as soon as possible.</p>

              <div className="bg-blue-50 p-4 rounded-md border border-blue-200">
                <h3 className="font-semibold text-blue-800 mb-2">POST Method & Redirect</h3>
                <p className="text-sm text-blue-700">
                  Your form was submitted using the POST method, which sends data in the request body rather than in the
                  URL. After processing your submission, our server used a 303 redirect (See Other) to send you to this
                  thank you page. This is a common pattern for form submissions.
                </p>
              </div>
            </CardContent>
            <CardFooter className="border-t pt-6 flex flex-col sm:flex-row gap-4">
              <Button asChild variant="outline" className="w-full">
                <Link href="/contact">Send Another Message</Link>
              </Button>
              <Button asChild className="w-full">
                <Link href="/dashboard">Return to Dashboard</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}
