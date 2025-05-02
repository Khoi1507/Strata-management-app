import { NextResponse } from "next/server"

/**
 * This is a serverless function that handles contact form submissions
 *
 * HTTP Methods:
 * - POST: Used for submitting data to be processed and stored
 *   - Data is sent in the request body, not visible in the URL
 *   - More secure for sensitive information
 *   - No size limitations for practical purposes
 *   - Not cached by browsers
 *   - Cannot be bookmarked
 *
 * - GET: Used for retrieving data
 *   - Data is sent as URL parameters, visible to everyone
 *   - Limited by URL length restrictions
 *   - Can be cached and bookmarked
 *   - Should not change server state
 *
 * HTTP Status Codes:
 * - 200 OK: Request succeeded
 * - 201 Created: Request succeeded and a new resource was created
 * - 303 See Other: Used for POST-to-GET redirects after form submissions
 * - 307 Temporary Redirect: Temporary redirect that preserves the HTTP method
 * - 400 Bad Request: Server cannot process the request due to client error
 * - 500 Internal Server Error: Unexpected server error
 */

export async function POST(request: Request) {
  try {
    // Get form data from the request
    const formData = await request.formData()

    const name = formData.get("name")
    const email = formData.get("email")
    const subject = formData.get("subject")
    const message = formData.get("message")
    const priority = formData.get("priority")

    // Validate required fields
    if (!name || !email || !subject || !message) {
      // Return 400 Bad Request if required fields are missing
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // In a real application, you would:
    // 1. Validate the email format
    // 2. Save the message to a database
    // 3. Send an email notification
    // 4. Log the submission

    console.log("Contact form submission:", {
      name,
      email,
      subject,
      message,
      priority,
      timestamp: new Date().toISOString(),
    })

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Redirect to the thank you page with status 303 (See Other)
    // 303 is specifically designed for POST-to-GET redirects after form submissions
    return NextResponse.redirect(new URL("/contact/thank-you", request.url), 303)

    // Alternative: Return a JSON response instead of redirecting
    // return NextResponse.json(
    //   { success: true, message: "Contact form submitted successfully" },
    //   { status: 201 }
    // )
  } catch (error) {
    console.error("Error processing contact form:", error)

    // Return 500 Internal Server Error for unexpected errors
    return NextResponse.json({ error: "Failed to process contact form" }, { status: 500 })
  }
}

// Handle GET requests to demonstrate different HTTP methods
export async function GET(request: Request) {
  const url = new URL(request.url)
  const name = url.searchParams.get("name")

  if (name) {
    // If name parameter is provided, return personalized message
    return NextResponse.json({
      message: `Hello, ${name}! This is a GET request response.`,
      info: "GET requests are used for retrieving data and should not modify server state.",
    })
  }

  // Demonstrate different redirect status codes
  const redirectType = url.searchParams.get("redirect")

  if (redirectType === "301") {
    // 301 Moved Permanently - permanent redirect
    return NextResponse.redirect(new URL("/contact/http-info", request.url), 301)
  }

  if (redirectType === "307") {
    // 307 Temporary Redirect - temporary redirect that preserves the HTTP method
    return NextResponse.redirect(new URL("/contact/http-info", request.url), 307)
  }

  // Default response for GET requests
  return NextResponse.json({
    message: "This is the contact form API endpoint",
    usage: {
      post: "Submit contact form data",
      get: "Retrieve information about the API",
    },
    examples: {
      getWithName: "/api/contact?name=YourName",
      redirectDemo: "/api/contact?redirect=301",
    },
  })
}
