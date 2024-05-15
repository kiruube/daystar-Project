//introduce express
const express = require("express");

//Accesing the router function in express
const router = express.Router();

//introduce the model
const AdminRegistration = require("../models/adminRegistration");
const StaffRegistration = require("../models/StaffRegistration");
//Creating the route
router.get("/adminRegister", (req, res) => {
  res.render("adminReg"); //render the file name you are working on
});

//Posting the post route.. Sending data to the Database.
router.post("/adminRegister", async (req, res) => {
  try {
    const adminRegister = new AdminRegistration(req.body);
    console.log(req.body);
    await AdminRegistration.register(
      adminRegister,
      req.body.password,
      (err) => {
        //register methods is used for authentication
        //password harshing(for security purposes)
        if (err) {
          throw err;
        }
        res.redirect("/login");
      }
    );
  } catch (error) {
    res.status(400).send("Sorry! Something wrong happened");
    console.log("Error registering Administrator", error);
  }
});

//Staff route
router.get("/staff", (req, res) => {
  res.render("Reg");
});

router.post("/staff", async (req, res) => {
  if (req.session.user) {
  try {
    const staff = new StaffRegistration(req.body);
    console.log(staff);
    await staff.save();
    res.redirect("/staff");
  } catch (error) {
    res.status(400).send("Sorry! Something wrong happened");
    console.log("Error registering a staff...", error);
  }
} else {
  res.redirect("/login");
}
});

//fetching staffmembers from the database
router.get("/staffList", async (req, res) => {
  try {
    const staffmembers = await StaffRegistration.find();
    res.render("staffList", { staffmembers: staffmembers });
  } catch (error) {
    res.status(400).send("Unable to find Staffmembers from the Database");
  }
});

//Deleting a staffmember in the database
router.post("/staffdelete", async (req, res) => {
  if (req.session.user) {
  try {
    await StaffRegistration.deleteOne({ _id: req.body.id });
    console.log(req.body);
    res.redirect("back");
  } catch (error) {
    res.status(400).send("Unable to delete staff member!");
    console.log("Error deleting staff member...", error);
  }
} else {
  res.redirect("/login");
}
});

//updating a staffmember in the database
// Route to fetch the update form for a specific staffmember
router.get("/RegUpdate/:id", async (req, res) => {
  if (req.session.user) {
  try {
    const RegUpdate = await StaffRegistration.findOne({ _id: req.params.id });
    res.render("RegUpdate", { staff: RegUpdate });
  } catch (error) {
    console.log("Error finding Staff", error);
    res.status(404).send("Internal Server Error");
  }
} else {
  res.redirect("/login");
}
});

router.post("/RegUpdate", async (req, res) => {
  try {
    await StaffRegistration.findOneAndUpdate({ _id: req.query.id }, req.body, {
      new: true,
    });
    res.redirect("/staffList");
  } catch (error) {
    console.error("Error updating Staff:", error);
    res.status(404).send("Internal Server Error");
  }
});

module.exports = router;
