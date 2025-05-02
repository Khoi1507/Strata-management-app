"use client"

import dynamic from "next/dynamic"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Dynamic import within a client component is allowed
const ConfirmationDetails = dynamic(() => import("@/components/confirmation-details").then((mod) => mod.default), {
  ssr: false,
  loading: () => <div className="p-4 text-center">Loading confirmation details...</div>,
})

export function ConfirmationPageClient() {
  return (
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
  )
}
