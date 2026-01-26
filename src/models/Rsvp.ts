import mongoose, { Schema, models } from "mongoose"

const GuestSchema = new Schema({
  firstName: String,
  lastName: String,
  isKid: Boolean,
  foodRestrictions: String,
  additionalFoodNotes: String,
})

const RsvpSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    isAttending: { type: String, enum: ["yes", "no"], required: true },
    needsTransportation: String,
    foodRestrictions: String,
    additionalFoodNotes: String,
    guests: [GuestSchema],
  },
  { timestamps: true }
)

export default models.Rsvp || mongoose.model("Rsvp", RsvpSchema)
