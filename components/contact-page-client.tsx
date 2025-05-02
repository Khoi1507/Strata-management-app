"use client"

import dynamic from "next/dynamic"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Dynamic import within a client component is allowed
const ContactForm = dynamic(() => import("@/components/contact-form").then((mod) => mod.ContactForm), {
  ssr: false,
  loading: () => <div className="p-4 text-center">Loading form...</div>,
})

export function ContactPageClient() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Send us a message</CardTitle>
        <CardDescription>Fill out the form below to get in touch with our team</CardDescription>
      </CardHeader>
      <CardContent>
        <ContactForm />
      </CardContent>
    </Card>
  )
}
