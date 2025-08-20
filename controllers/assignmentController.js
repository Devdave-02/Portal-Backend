const Assignment = require('../models/assignmentModel');

// GET all assignments
exports.getAllAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find();
    res.json(assignments);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
