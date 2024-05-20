const mongoose = require("mongoose");

const babyCheckInOutSchema = new mongoose.Schema({
  babyName: {
    type: String,
    unique: true
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
    enum: ["Full Day(UGX 15,000)", "Half Day(UGX 10,000)"]
  },
  sitter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "StaffRegistration"
  },
  checkinTime: {
    type: String,
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
    type: String,
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

module.exports = mongoose.model("BabyCheckInOut", babyCheckInOutSchema);







