const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  course: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  due: {
    type: Date,
    required: true,
  },
  submitted: {
    type: Boolean,
    default: false,
  },
  fileUrl: {
    type: String,
    default: null,
  }
}, { timestamps: true });

module.exports = mongoose.model('Assignment', assignmentSchema);
