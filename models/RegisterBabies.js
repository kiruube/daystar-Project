const mongoose = require("mongoose");

const babyregistrationSchema = new mongoose.Schema({
  childName: {
    type: String,
    trim: true,
  },
  gender: {
    type: String,
    trim: true,
  },
  dateOfBirth: {
    type: String,
    trim: true,
  },
  fatherName: {
    type: String,
    trim: true,
  },
  fatherPhone: {
    type: String,
    trim: true,
  },
  fatherEmail: {
    type: String,
    trim: true,
  },
  fatherNationality: {
    type: String,
    trim: true,
  },
  fatherOccupation: {
    type: String,
    trim: true,
  },
  motherName: {
    type: String,
    trim: true,
  },
  motherPhone: {
    type: String,
    trim: true,
  },
  motherEmail: {
    type: String,
    trim: true,
  },
  motherNationality: {
    type: String,
    trim: true,
  },
  motherOccupation: {
    type: String,
    trim: true,
  },
  parentResponsibility: {
    type: String,
    trim: true,
  },
  passportImage: {
    type: String,
    trim: true,
  },
  location: {
    type: String,
    trim: true,
  },
  nationality: {
    type: String,
    trim: true,
  },
  religion: {
    type: String,
    trim: true,
  },
  medicalBackground: {
    type: String,
    trim: true,
  },
  doctor: {
    type: String,
    trim: true,
  },
  doctorEmail: {
    type: String,
    trim: true,
  },
  hospital: {
    type: String,
    trim: true,
  },
  babyNumber: {
    type: String,
    trim: true,
  },
  isOrphan: {
    type: String,
    trim: true,
  },
  guardianName: {
    type: String,
    trim: true,
  },
  guardianPhone: {
    type: String,
    trim: true,
  },
  guardianEmail: {
    type: String,
    trim: true,
  },
  relationshipStatus: {
    type: String,
    trim: true,
  }
});
module.exports = mongoose.model("RegisterBaby", babyregistrationSchema );
