const Result = require('../models/resultModel');

// GET result by department, level, and semester
exports.getResultByQuery = async (req, res) => {
  const { department, level, semester } = req.params;
  try {
    const result = await Result.findOne({ department, level, semester });
    if (!result) return res.status(404).json({ message: 'No results found' });
    res.json(result.results);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
