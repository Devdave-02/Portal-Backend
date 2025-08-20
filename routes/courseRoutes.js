const express = require('express');
const router = express.Router();
const CourseRegistration = require('../models/courseModel');


router.get('/', async (req, res) => {
  try {
    const registrations = await CourseRegistration.find().sort({ createdAt: -1 });
    res.status(200).json(registrations);
  } catch (err) {
    console.error('❌ Error fetching registrations:', err);
    res.status(500).json({ error: 'Failed to fetch registrations' });
  }
});


router.post('/', async (req, res) => {
  try {
    const { name, department, level, semester } = req.body;

    // Validation (basic)
    if (!name || !department || !level || !semester || !Array.isArray(courses) || courses.length === 0) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Save registration
    const newRegistration = await CourseRegistration.create({
      name,
      department,
      level,
      semester,
      courses, 
    });

     if (!courseDoc) {
      return res.status(404).json({ message: 'No courses found for the selection' });
    }

     res.json(courseDoc.Courses); // ✅ return just the array of courses
  } catch (error) {
    console.error('❌ Error fetching courses:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
