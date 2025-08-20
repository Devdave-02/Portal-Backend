const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Assignment = require('../models/assignmentModel');

dotenv.config(); // Load .env variables

// ✅ Seed data (removed `id` field)
const assignments = [
  {
    course: 'MED201',
    title: 'Neuroanatomy Assignment',
    due: new Date('2025-08-20'),
    submitted: false,
    fileUrl: null,
  },
  {
    course: 'NUR204',
    title: 'Mental Health Case Study',
    due: new Date('2025-07-10'),
    submitted: true,
    fileUrl: 'https://example.com/uploads/a2.pdf',
  },
  {
    course: 'MLS302',
    title: 'Virology Essay',
    due: new Date('2025-08-25'),
    submitted: false,
    fileUrl: null,
  },
  {
    course: 'ANA101',
    title: 'Histology Lab Report',
    due: new Date('2025-09-05'),
    submitted: false,
    fileUrl: null,
  },
  {
    course: 'PHS201',
    title: 'Cardiovascular Physiology Quiz',
    due: new Date('2025-08-15'),
    submitted: true,
    fileUrl: 'https://example.com/uploads/a5.docx',
  },
  {
    course: 'MED302',
    title: 'Microbiology & Immunology Presentation',
    due: new Date('2025-08-30'),
    submitted: false,
    fileUrl: null,
  },
  {
    course: 'NUR305',
    title: 'Gerontological Nursing Reflection',
    due: new Date('2025-09-12'),
    submitted: false,
    fileUrl: null,
  },
  {
    course: 'MLS304',
    title: 'Transfusion Science Worksheet',
    due: new Date('2025-07-25'),
    submitted: true,
    fileUrl: 'https://example.com/uploads/a8.pdf',
  },
  {
    course: 'ANA304',
    title: 'Applied Surgical Anatomy Poster',
    due: new Date('2025-08-18'),
    submitted: false,
    fileUrl: null,
  },
  {
    course: 'PHS304',
    title: 'Integrative Physiology Research Brief',
    due: new Date('2025-08-28'),
    submitted: true,
    fileUrl: 'https://example.com/uploads/a10.pdf',
  }
];

async function seed() {
  try {
    const mongoURI = process.env.MONGO_URI;
    console.log('🔗 Connecting to MongoDB:', mongoURI);

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await Assignment.deleteMany();
    await Assignment.insertMany(assignments);

    console.log('✅ Assignments seeded successfully!');
    process.exit();
  } catch (err) {
    console.error('❌ Error seeding assignments:', err);
    process.exit(1);
  }
}

seed();
