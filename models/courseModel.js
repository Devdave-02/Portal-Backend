const mongoose = require('mongoose');

const courseRegistrationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  semester: {
    type: String,
    required: true,
  },
   courses: [
    {
      code: { type: String, required: true },
      title: { type: String, required: true },
    }
  ],
}, { timestamps: true });

module.exports = mongoose.model('CourseRegistration', courseRegistrationSchema);
