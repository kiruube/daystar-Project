const mongoose = require("mongoose");

// Define the schema for the BabyCheckInOut model
const babyCheckInOutSchema = new mongoose.Schema({
  babyName: {
    type: String,
    trim: true
  },
  personBrought: {
    type: String,
    trim: true
  },
  contactBrought: {
    type: String,
    trim:true
  },
  periodOfStay: {
    type: String,
    enum: ["Full Day(UGX 15,000)", "Half Day(UGX 10,000)"] // Specifies the periodOfStay
  },
  sitter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "StaffRegistration"
  },
  checkinTime: {
    type: Date,
    trim: true
  },
  personPickingUp:{
    type: String,
    trim: true
  },
  contactNumber:{
    type: String,
    trim: true
  },
  checkoutTime: {
    type: Date,
    trim:true
  },
  eventType: {
    type: String,
    enum: ["checkin", "checkout"],
    trim: true
  },
  checkoutNotes: {
    type: String
  }
});

// Create the BabyCheckInOut model using the schema
const BabyCheckInOut = mongoose.model("BabyCheckInOut", babyCheckInOutSchema, "babycheckinouts");

module.exports = BabyCheckInOut;







