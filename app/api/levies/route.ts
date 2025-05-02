import { NextResponse } from "next/server"

// This is a serverless edge function that handles levy data
export async function GET() {
  // In a real application, this would fetch data from a database
  const levies = [
    {
      id: 1,
      unit: "Unit 1",
      owner: "John Smith",
      type: "Administration",
      amount: 750.0,
      dueDate: "2025-04-30",
      status: "paid",
      paymentDate: "2025-04-05",
    },
    {
      id: 2,
      unit: "Unit 2",
      owner: "Jane Doe",
      type: "Capital Works",
      amount: 1250.0,
      dueDate: "2025-04-30",
      status: "outstanding",
      paymentDate: null,
    },
    // More levies would be here
  ]

  return NextResponse.json({ levies })
}

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validate the request data
    if (!data.unit || !data.owner || !data.amount) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // In a real application, this would save to a database
    // For now, we'll just return a success response with the data
    return NextResponse.json(
      {
        success: true,
        message: "Levy created successfully",
        levy: {
          id: Math.floor(Math.random() * 1000), // Generate a random ID
          ...data,
          status: "outstanding",
          paymentDate: null,
        },
      },
      { status: 201 },
    )
  } catch (error) {
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}
