const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Result = require('../models/resultModel'); 
const resultData = require('../mockResultData');

dotenv.config();


function formatResults(data) {
  const formatted = [];

  for (const [program, levels] of Object.entries(data)) {
    for (const [level, semesters] of Object.entries(levels)) {
      for (const [semester, courses] of Object.entries(semesters)) {
        formatted.push({
          program,  
          level,
          semester,
          courses,   
        });
      }
    }
  }

  return formatted;
}

async function seedResults() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const mockResults = formatResults(resultData);

    await Result.deleteMany(); // Clear previous records
    await Result.insertMany(mockResults); // Insert new

    console.log('✅ Results seeded successfully!');
    process.exit();
  } catch (err) {
    console.error('❌ Error seeding results:', err);
    process.exit(1);
  }
}

seedResults();
