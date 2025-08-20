const express = require('express');
const router = express.Router();
const Result = require('../models/resultModel');

// GET all results
router.get('/', async (req, res) => {
  try {
    const results = await Result.find().sort({ createdAt: -1 });
    res.status(200).json(results);
  } catch (err) {
    console.error('❌ Error fetching results:', err);
    res.status(500).json({ error: 'Failed to fetch results' });
  } 
});

// GET results by program, level, and semester (optional filter route)
router.get('/filter', async (req, res) => {
  try {
    const { program, level, semester } = req.query;

    const filter = {};
    if (program) filter.program = program;
    if (level) filter.level = level;
    if (semester) filter.semester = semester;

    const results = await Result.find(filter);
    if (!results.length) {
      return res.status(404).json({ message: 'No matching results found' });
    }

    res.status(200).json(results);
  } catch (err) {
    console.error('❌ Error filtering results:', err);
    res.status(500).json({ error: 'Failed to filter results' });
  }
});

// GET result by program, level, and semester (for single student view)
router.get('/:program/:level/:semester', async (req, res) => {
  try {
    const { program, level, semester } = req.params;

    const result = await Result.findOne({ program, level, semester });

    if (!result) {
      return res.status(404).json({ message: 'Result not found' });
    }

    res.status(200).json(result);
  } catch (err) {
    console.error('❌ Error fetching result by path:', err);
    res.status(500).json({ error: 'Failed to fetch result' });
  }
});

// POST new result
router.post('/', async (req, res) => {
  try {
    const newResult = new Result(req.body);
    const savedResult = await newResult.save();
    res.status(201).json(savedResult);
  } catch (err) {
    console.error('❌ Error saving result:', err);
    res.status(400).json({ error: 'Failed to save result' });
  }
});

module.exports = router;
