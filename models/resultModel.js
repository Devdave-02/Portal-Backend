const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  program: { 
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
      code: String,
      title: String,
      unit: Number,
      score: Number,
      grade: String,
      remark: String,
    }
  ]
}, {
  timestamps: true
});

module.exports = mongoose.model('Result', resultSchema);
