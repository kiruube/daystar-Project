const express = require("express");
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login"); // Importing the connect-ensure-login module

// Import necessary models
const BabyCheckInOut = require("../models/Check");
const RegisterBaby = require("../models/RegisterBabies");
const Finance = require("../models/accounts");
const StaffRegistration = require("../models/StaffRegistration");

// Route to fetch dashboard data
router.get(
  "/dashboard",
  connectEnsureLogin.ensureLoggedIn(),
  async (req, res) => {
    try {
      // Fetch total number of babies present
      const babiesPresentCount = await BabyCheckInOut.countDocuments({
        eventType: "checkin",
      });

      // Fetch total number of registered babies
      const babiesEnrolledCount = await RegisterBaby.countDocuments();

      // Fetch total number of registered staff members with role 'Sitter'
      const registeredSittersCount = await StaffRegistration.countDocuments({
        role: "Sitter",
      });

      // Fetch total number of registered staff members
      const totalRegisteredStaffCount =
        await StaffRegistration.countDocuments();

      // Fetch total income
      const totalIncome = await Finance.aggregate([
        {$match:{recordType: "Income"}},
        { $group: { _id: "$all", total: { $sum: {$ifNull: ["$recordAmount", 0 ]} } } },
      ]);

      // Fetch total expenses
      const totalExpenses = await Finance.aggregate([
        {$match:{recordType: "Expense"}},
        { $group: { _id: "$all", total: { $sum: {$ifNull: ["$recordAmount", 0]} } } },
      ]);
       console.log("___________________________", totalExpenses);
       console.log("___________________________", totalIncome);

      // Send the fetched data as an object to be rendered in the view
      res.render("dashboard", {
        title: "dashboard",
        currentuser: req.session.user,
        babiesPresentCount: babiesPresentCount,
        babiesEnrolledCount: babiesEnrolledCount,
        registeredSittersCount: registeredSittersCount,
        totalRegisteredStaffCount: totalRegisteredStaffCount,
        totalIncome: totalIncome[0], // Assuming totalIncome is an array and you want the first element
        totalExpenses: totalExpenses[0], // Assuming totalExpenses is an array and you want the first element
      });
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

module.exports = router;
