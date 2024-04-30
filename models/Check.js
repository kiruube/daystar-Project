const mongoose = require("mongoose");

// Define the schema for the BabyCheckInOut model
const babyCheckInOutSchema = new mongoose.Schema({
  babyName: {
    type: String,
    required: true
  },
  person: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  periodOfStay: {
    type: String,
    enum: ["fullDay", "halfDay"] // Specifies that periodOfStay can only be "fullDay" or "halfDay"
  },
  sitter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "StaffRegistration"
  },
  checkinTime: {
    type: Date
  },
  checkoutTime: {
    type: Date
  },
  eventType: {
    type: String,
    enum: ["checkin", "checkout"],
    required: true
  },
  checkoutNotes: {
    type: String
  }
});

// Create the BabyCheckInOut model using the schema
const BabyCheckInOut = mongoose.model("BabyCheckInOut", babyCheckInOutSchema, "babycheckinouts");

module.exports = BabyCheckInOut;







