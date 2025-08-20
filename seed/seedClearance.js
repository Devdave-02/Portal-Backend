const dotenv = require('dotenv');
const mongoose = require("mongoose");
const Clearance = require("../models/clearanceModel");

dotenv.config(); // ✅ loads .env variables

const seedClearance = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;
    console.log("🔗 Connecting to MongoDB:", mongoURI);

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await Clearance.deleteMany({}); // clear old data

    await Clearance.create([
      {
        studentId: "NBU/100/001",
        units: {
          Bursary: { status: "Pending" },
          Library: { status: "Pending" },
          Department: { status: "Pending" },
          Faculty: { status: "Pending" },
          Hostel: { status: "Pending" },
        },
        status: "Pending",
      },
      {
        studentId: "NBU/200/045",
        units: {
          Bursary: {
            status: "Cleared",
            approvedBy: "Bursary Officer",
            date: new Date(),
          },
          Library: { status: "Pending" },
          Department: { status: "Pending" },
          Faculty: { status: "Pending" },
          Hostel: { status: "Pending" },
        },
        status: "Pending",
      },
    ]);

    console.log("✅ Clearance seed inserted");
    mongoose.connection.close();
  } catch (err) {
    console.error("❌ Error seeding clearance:", err);
    mongoose.connection.close();
  }
};

seedClearance();
