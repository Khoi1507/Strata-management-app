import { NextResponse } from "next/server"

// This is a serverless edge function that handles maintenance requests
export async function GET() {
  // In a real application, this would fetch data from a database
  const maintenanceRequests = [
    {
      id: 1,
      title: "Leaking roof in common area",
      location: "Building entrance",
      status: "open",
      priority: "high",
      date: "2025-04-10",
      reporter: "Sarah Johnson",
    },
    {
      id: 2,
      title: "Broken intercom system",
      location: "Main entrance",
      status: "in-progress",
      priority: "medium",
      date: "2025-04-08",
      reporter: "Michael Chen",
    },
    // More requests would be here
  ]

  return NextResponse.json({ maintenanceRequests })
}

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validate the request data
    if (!data.title || !data.location) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // In a real application, this would save to a database
    // For now, we'll just return a success response with the data
    return NextResponse.json(
      {
        success: true,
        message: "Maintenance request created successfully",
        request: {
          id: Math.floor(Math.random() * 1000), // Generate a random ID
          ...data,
          status: "open",
          date: new Date().toISOString().split("T")[0],
        },
      },
      { status: 201 },
    )
  } catch (error) {
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}
