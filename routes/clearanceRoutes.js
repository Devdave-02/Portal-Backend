const express = require('express');
const Clearance = require('../models/clearanceModel');
const router = express.Router();

// ✅ Get clearance by studentId
router.get("/:studentId", async (req, res) => {
  try {
    const clearance = await Clearance.findOne({ studentId: req.params.studentId });
    if (!clearance) return res.status(404).json({ error: "Clearance not found" });
    res.json(clearance);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ Update clearance for a specific unit
router.put("/:studentId/unit", async (req, res) => {
  try {
    const { unit, status, remarks, officerRole } = req.body;

    const clearance = await Clearance.findOne({ studentId: req.params.studentId });
    if (!clearance) return res.status(404).json({ error: "Clearance not found" });

    // update the unit
    clearance.units[unit] = {
      status,
      remarks,
      approvedBy: officerRole,
      date: new Date(),
    };

    // check if all units cleared
    const allCleared = Object.values(clearance.units).every(
      (u) => u.status === "Cleared"
    );

    if (allCleared) {
      clearance.status = "Completed";
      clearance.finalCertificate.issued = true;
      clearance.finalCertificate.fileUrl = `/certificates/${clearance.studentId}.pdf`; // you can generate a real file later
    } else if (Object.values(clearance.units).some((u) => u.status === "Rejected")) {
      clearance.status = "Rejected";
    } else {
      clearance.status = "Pending";
    }

    await clearance.save();
    res.json(clearance);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error updating clearance" });
  }
});

module.exports = router;   // ✅ CommonJS export
