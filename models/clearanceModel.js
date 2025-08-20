const mongoose = require("mongoose");

const UnitSchema = new mongoose.Schema({
  status: {
    type: String,
    enum: ["Pending", "Cleared", "Rejected"],
    default: "Pending",
  },
  remarks: { type: String },
  approvedBy: { type: String },
  date: { type: Date },
});

const ClearanceSchema = new mongoose.Schema({
  studentId: { type: String, required: true, unique: true },
  units: {
    Bursary: { type: UnitSchema, default: () => ({}) },
    Library: { type: UnitSchema, default: () => ({}) },
    Department: { type: UnitSchema, default: () => ({}) },
    Faculty: { type: UnitSchema, default: () => ({}) },
    Hostel: { type: UnitSchema, default: () => ({}) },
  },
  status: {
    type: String,
    enum: ["Pending", "Completed", "Rejected"],
    default: "Pending",
  },
  finalCertificate: {
    issued: { type: Boolean, default: false },
    fileUrl: { type: String },
  },
});

module.exports = mongoose.model("Clearance", ClearanceSchema);
