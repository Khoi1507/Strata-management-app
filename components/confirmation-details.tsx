"use client"

import { useSearchParams } from "next/navigation"

export default function ConfirmationDetails() {
  const searchParams = useSearchParams()

  const name = searchParams.get("name") || "User"
  const email = searchParams.get("email") || "Not provided"
  const subject = searchParams.get("subject") || "Not provided"
  const message = searchParams.get("message") || "Not provided"
  const priority = searchParams.get("priority") || "normal"

  return (
    <>
      <p>
        Hello <span className="font-semibold">{name}</span>, we have received your message with the following details:
      </p>

      <div className="bg-gray-50 p-4 rounded-md space-y-2">
        <div>
          <span className="font-semibold">Email:</span> {email}
        </div>
        <div>
          <span className="font-semibold">Subject:</span> {subject}
        </div>
        <div>
          <span className="font-semibold">Priority:</span> {priority}
        </div>
        <div>
          <span className="font-semibold">Message:</span>
          <p className="mt-1 whitespace-pre-wrap">{message}</p>
        </div>
      </div>

      <div className="bg-amber-50 p-4 rounded-md border border-amber-200">
        <h3 className="font-semibold text-amber-800 mb-2">GET Method Information</h3>
        <p className="text-sm text-amber-700">
          Notice that all your form data is visible in the URL of this page. This is how GET requests work - they append
          the data to the URL as query parameters. This is why GET is not recommended for sensitive information or large
          amounts of data.
        </p>
      </div>
    </>
  )
}
