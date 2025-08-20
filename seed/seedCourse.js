const dotenv = require('dotenv');
const mongoose = require('mongoose');
const CourseRegistration = require('../models/courseModel');

dotenv.config(); 

const courseData = [
  {
    department: "Medicine",
    level: "100L",
    semester: "First Semester",
    courses: [
      { code: "MED101", title: "Introduction to Medicine" },
      { code: "MED102", title: "Biochemistry I" },
      { code: "MED103", title: "Human Biology" }
    ]
  },
  {
    department: "Medicine",
    level: "100L",
    semester: "Second Semester",
    courses: [
      { code: "MED104", title: "Biochemistry II" },
      { code: "MED105", title: "Cell Biology" },
      { code: "MED106", title: "Introduction to Anatomy" }
    ]
  },

  // 200L
  {
    department: "Medicine",
    level: "200L",
    semester: "First Semester",
    courses: [
      { code: "MED201", title: "Human Physiology I" },
      { code: "MED202", title: "Gross Anatomy I" },
      { code: "MED203", title: "Medical Microbiology I" }
    ]
  },
  {
    department: "Medicine",
    level: "200L",
    semester: "Second Semester",
    courses: [
      { code: "MED204", title: "Human Physiology II" },
      { code: "MED205", title: "Gross Anatomy II" },
      { code: "MED206", title: "Medical Microbiology II" }
    ]
  },

  // 300L
  {
    department: "Medicine",
    level: "300L",
    semester: "First Semester",
    courses: [
      { code: "MED301", title: "Pathology I" },
      { code: "MED302", title: "Pharmacology I" },
      { code: "MED303", title: "Clinical Skills I" }
    ]
  },
  {
    department: "Medicine",
    level: "300L",
    semester: "Second Semester",
    courses: [
      { code: "MED304", title: "Pathology II" },
      { code: "MED305", title: "Pharmacology II" },
      { code: "MED306", title: "Clinical Skills II" }
    ]
  },

  // Nursing Courses
  // 100L
  {
    department: "Nursing",
    level: "100L",
    semester: "First Semester",
    courses: [
      { code: "NUR101", title: "Introduction to Nursing" },
      { code: "NUR102", title: "Basic Anatomy & Physiology" },
      { code: "NUR103", title: "Health Psychology" }
    ]
  },
  {
    department: "Nursing",
    level: "100L",
    semester: "Second Semester",
    courses: [
      { code: "NUR104", title: "Fundamentals of Nursing" },
      { code: "NUR105", title: "Community Health Nursing I" },
      { code: "NUR106", title: "Nursing Ethics" }
    ]
  },

  // 200L
  {
    department: "Nursing",
    level: "200L",
    semester: "First Semester",
    courses: [
      { code: "NUR201", title: "Medical-Surgical Nursing I" },
      { code: "NUR202", title: "Maternal & Child Health I" },
      { code: "NUR203", title: "Pharmacology for Nurses" }
    ]
  },
  {
    department: "Nursing",
    level: "200L",
    semester: "Second Semester",
    courses: [
      { code: "NUR204", title: "Medical-Surgical Nursing II" },
      { code: "NUR205", title: "Maternal & Child Health II" },
      { code: "NUR206", title: "Nutrition in Nursing" }
    ]
  },

  // 300L
  {
    department: "Nursing",
    level: "300L",
    semester: "First Semester",
    courses: [
      { code: "NUR301", title: "Advanced Nursing Practice I" },
      { code: "NUR302", title: "Nursing Research I" },
      { code: "NUR303", title: "Mental Health Nursing" }
    ]
  },
  {
    department: "Nursing",
    level: "300L",
    semester: "Second Semester",
    courses: [
      { code: "NUR304", title: "Advanced Nursing Practice II" },
      { code: "NUR305", title: "Nursing Research II" },
      { code: "NUR306", title: "Leadership & Management in Nursing" }
    ]
  },


// Anatomy Courses
  // 100L
  {
    department: "Anatomy",
    level: "100L",
    semester: "First Semester",
    courses: [
      { code: "ANA101", title: "Intro to Anatomy" },
      { code: "ANA102", title: "Human Biology" },
      { code: "ANA103", title: "General Histology" }
    ]
  },
  {
    department: "Anatomy",
    level: "100L",
    semester: "Second Semester",
    courses: [
      { code: "ANA104", title: "Gross Anatomy I" },
      { code: "ANA105", title: "Histology of Tissues" },
      { code: "ANA106", title: "Embryology Basics" }
    ]
  },

  // 200L
  {
    department: "Anatomy",
    level: "200L",
    semester: "First Semester",
    courses: [
      { code: "ANA201", title: "Gross Anatomy II" },
      { code: "ANA202", title: "Neuroanatomy" },
      { code: "ANA203", title: "Comparative Anatomy" }
    ]
  },
  {
    department: "Anatomy",
    level: "200L",
    semester: "Second Semester",
    courses: [
      { code: "ANA204", title: "Histology of Organs" },
      { code: "ANA205", title: "Embryology II" },
      { code: "ANA206", title: "Anatomy of the Limbs" }
    ]
  },

  // 300L
  {
    department: "Anatomy",
    level: "300L",
    semester: "First Semester",
    courses: [
      { code: "ANA301", title: "Clinical Anatomy I" },
      { code: "ANA302", title: "Developmental Anatomy" },
      { code: "ANA303", title: "Anatomical Techniques" }
    ]
  },
  {
    department: "Anatomy",
    level: "300L",
    semester: "Second Semester",
    courses: [
      { code: "ANA304", title: "Clinical Anatomy II" },
      { code: "ANA305", title: "Advanced Neuroanatomy" },
      { code: "ANA306", title: "Radiological Anatomy" }
    ]
  },

// Physiology Courses
// 100L
  {
    department: "Physiology",
    level: "100L",
    semester: "First Semester",
    courses: [
      { code: "PHY101", title: "Intro to Physiology" },
      { code: "PHY102", title: "Biological Chemistry" },
      { code: "PHY103", title: "Cell Physiology" }
    ]
  },
  {
    department: "Physiology",
    level: "100L",
    semester: "Second Semester",
    courses: [
      { code: "PHY104", title: "Basic Biophysics" },
      { code: "PHY105", title: "Blood & Body Fluids" },
      { code: "PHY106", title: "Homeostasis Mechanisms" }
    ]
  },

  // 200L
  {
    department: "Physiology",
    level: "200L",
    semester: "First Semester",
    courses: [
      { code: "PHY201", title: "Cardiovascular Physiology" },
      { code: "PHY202", title: "Respiratory Physiology" },
      { code: "PHY203", title: "Renal Physiology" }
    ]
  },
  {
    department: "Physiology",
    level: "200L",
    semester: "Second Semester",
    courses: [
      { code: "PHY204", title: "Digestive Physiology" },
      { code: "PHY205", title: "Endocrinology" },
      { code: "PHY206", title: "Neurophysiology" }
    ]
  },

  // 300L
  {
    department: "Physiology",
    level: "300L",
    semester: "First Semester",
    courses: [
      { code: "PHY301", title: "Special Senses Physiology" },
      { code: "PHY302", title: "Environmental Physiology" },
      { code: "PHY303", title: "Muscle Physiology" }
    ]
  },
  {
    department: "Physiology",
    level: "300L",
    semester: "Second Semester",
    courses: [
      { code: "PHY304", title: "Reproductive Physiology" },
      { code: "PHY305", title: "Exercise Physiology" },
      { code: "PHY306", title: "Integrative Physiology" }
    ]
  },

  // Medical Laboratory Science Courses
  // 100L
  {
    department: "MLS",
    level: "100L",
    semester: "First Semester",
    courses: [
      { code: "MLS101", title: "Introduction to Medical Lab Science" },
      { code: "MLS102", title: "Basic Laboratory Equipment" },
      { code: "MLS103", title: "Medical Terminology" }
    ]
  },
  {
    department: "MLS",
    level: "100L",
    semester: "Second Semester",
    courses: [
      { code: "MLS104", title: "Intro to Hematology" },
      { code: "MLS105", title: "Intro to Clinical Chemistry" },
      { code: "MLS106", title: "Lab Safety & Ethics" }
    ]
  },

  // 200L
  {
    department: "MLS",
    level: "200L",
    semester: "First Semester",
    courses: [
      { code: "MLS201", title: "Clinical Chemistry I" },
      { code: "MLS202", title: "Hematology I" },
      { code: "MLS203", title: "Medical Microbiology I" }
    ]
  },
  {
    department: "MLS",
    level: "200L",
    semester: "Second Semester",
    courses: [
      { code: "MLS204", title: "Clinical Chemistry II" },
      { code: "MLS205", title: "Hematology II" },
      { code: "MLS206", title: "Medical Microbiology II" }
    ]
  },

  // 300L
  {
    department: "MLS",
    level: "300L",
    semester: "First Semester",
    courses: [
      { code: "MLS301", title: "Immunology and Serology" },
      { code: "MLS302", title: "Histopathology I" },
      { code: "MLS303", title: "Parasitology I" }
    ]
  },
  {
    department: "MLS",
    level: "300L",
    semester: "Second Semester",
    courses: [
      { code: "MLS304", title: "Histopathology II" },
      { code: "MLS305", title: "Parasitology II" },
      { code: "MLS306", title: "Advanced Diagnostic Techniques" }
    ]
  }
]

 async function seed() {
  try {
    const mongoURI = process.env.MONGO_URI;
    console.log('🔗 Connecting to MongoDB:', mongoURI);

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

      await CourseRegistration.deleteMany(); // Optional: reset the DB

      const coursesToInsert = courseData.map(entry => ({
        name: "studentName", // Replace with actual logic if needed
        department: entry.department,
        level: entry.level,
        semester: entry.semester,
        courses: entry.courses,
      }));

      await CourseRegistration.insertMany(coursesToInsert);

    // ✅ Insert all data
    await CourseRegistration.insertMany(coursesToInsert);

    console.log(`✅ ${coursesToInsert.length} course entries seeded successfully!`);
    process.exit();
  } catch (err) {
    console.error("❌ Error seeding courses:", err);
    process.exit(1);
  }
}

seed();
