import Link from "next/link"
import dynamic from "next/dynamic"
import { Suspense } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Dynamically import the client component with suspense
const ContactForm = dynamic(() => import("@/components/contact-form-wrapper").then(mod => mod.ContactFormWrapper), {
  ssr: false, // Disable server-side rendering for this component
  loading: () => <div className="p-4 text-center">Loading form...</div>
})

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <main className="flex-1 p-6 bg-gray-50">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Contact Us</h1>
            <Link href="/contact/http-info" className="text-emerald-600 hover:text-emerald-700 underline">
              Learn about HTTP Methods
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>Fill out the form below to get in touch with our team</CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Other ways to reach the StrataSphere team</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-sm text-muted-foreground">
                    123 Strata Street
                    <br />
                    Sydney, NSW 2000
                    <br />
                    Australia
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-sm text-muted-foreground">support@stratasphere.com</p>
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-sm text-muted-foreground">+61 2 1234 5678</p>
                </div>
                <div>
                  <h3 className="font-semibold">Hours</h3>
                  <p className="text-sm text-muted-foreground">
                    Monday - Friday: 9am - 5pm
                    <br />
                    Saturday: 10am - 2pm
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
