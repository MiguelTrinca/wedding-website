import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import Rsvp from "@/models/Rsvp"
import { sendConfirmationEmail } from "@/lib/mail"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      formData,
      guests,
    } = body

    if (!formData.firstName || !formData.lastName || !formData.email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    await connectDB()

    const rsvp = await Rsvp.create({
      ...formData,
      guests,
    })

    await sendConfirmationEmail(
      formData.email,
      formData.firstName,
      formData.isAttending
    )

    return NextResponse.json({ success: true, rsvpId: rsvp._id })
  } catch (error) {
    console.error("RSVP error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
