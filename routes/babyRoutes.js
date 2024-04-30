const express = require("express");
const router = express.Router();

//Import model
const BabyCheckInOut = require("../models/Check")
const StaffRegistration = require("../models/StaffRegistration");
const RegisterBaby = require("../models/RegisterBabies");
router.get("/register", (req, res) => {
  res.render("babyreg");
});

// post route for the sign up form
//installing the async function
router.post("/register", async (req, res) => {
  try {
    const baby = new RegisterBaby(req.body);
    console.log(baby);
    await baby.save();
    res.redirect("/babyList");
  } catch (error) {
    res.status(400).send("Sorry! Something wrong happened");
    console.log("Error registering a baby.", error);
  }
});

//fetching babies from the database
router.get("/babyList", async (req, res) => {
  try {
    const babies = await RegisterBaby.find();
    res.render("babyList", { babies: babies });
  } catch (error) {
    res.status(400).send("Unable to find babies from the Database");
  }
});

//Deleting a baby in the database
router.post("/delete", async (req, res) => {
  try {
    await RegisterBaby.deleteOne({ _id: req.body.id });
    res.redirect("back");
  } catch (error) {
    res.status(400).send("Unable to delete baby!");
    console.log("Error deleting  baby...", error);
  }
});

//updating a baby in the database
// Route to fetch the update form for a specific baby
router.get("/babyUpdate/:id", async (req, res) => {
  try {
    const babyUpdate = await RegisterBaby.findOne({ _id: req.params.id });
    if (!babyUpdate) {
      return res.status(404).send("Baby not found");
    }
    res.render("babyUpdate", { baby: babyUpdate });
  } catch (error) {
    console.error("Error finding baby", error);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/babyUpdate/:id", async (req, res) => {
  try {
    const updatedBaby = await RegisterBaby.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!updatedBaby) {
      return res.status(404).send("Baby not found");
    }
    res.redirect("/babyList");
  } catch (error) {
    console.error("Error updating baby:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Route to render the check-in form
router.get("/checkin", async (req, res) => {
  try {
    // Fetch available sitters from the database
    const availableSitters = await StaffRegistration.find({ role: "Sitter" });

    // Fetch list of babies from the database
    const babies = await RegisterBaby.find();

    // Render the check-in form with available sitters and babies
    res.render("checkin", { availableSitters, babies });
  } catch (error) {
    console.error("Error rendering check-in form:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Route to handle check-in form submission
router.post("/checkin", async (req, res) => {
  try {
    // Extract data from the check-in form
    const { babyName, personBrought, contactBrought, periodOfStay, sitter } = req.body;

    // Capture the check-in time
    const checkinTime = new Date();

    // Create a new check-in entry in the database
    const newCheckin = new BabyCheckInOut({
      babyName,
      person: personBrought,
      contact: contactBrought,
      periodOfStay,
      sitter,
      checkinTime,
      eventType: "checkin"
    });

    // Save the check-in entry to the database
    await newCheckin.save();

    // Redirect to the list of checked-in babies
    res.redirect("/checked"); // Assuming this is the correct route to display checked-in babies
  } catch (error) {
    console.error("Error checking in baby:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Route to display the list of checked-in babies
router.get("/checked", async (req, res) => {
  try {
    // Fetch list of checked-in babies from the database
    const checkedInBabies = await BabyCheckInOut.find({ eventType: "checkin" });

    // Render the page with the list of checked-in babies
    res.render("checked", { babies: checkedInBabies });
  } catch (error) {
    console.error("Error fetching checked-in babies:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Route to render the checkout form for a specific baby
router.get("/checkout/:id", async (req, res) => {
  try {
    // Find the baby by ID
    const baby = await BabyCheckInOut.findById(req.params.id);

    // Render the checkout form with the baby's information
    res.render("checkout", { baby });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

// Route to handle checkout form submission
router.post("/checkout/:id", async (req, res) => {
  try {
    // Find the baby by ID
    const baby = await BabyCheckInOut.findById(req.params.id);

    // Update the baby's information with checkout details
    baby.personPickingUp = req.body.personPickingUp;
    baby.contactNumber = req.body.contactNumber;
    baby.checkoutNotes = req.body.checkoutNotes;
    baby.checkoutTime = new Date();

    // Save the updated baby information
    await baby.save();

    // Redirect to the list of checked-in babies
    res.redirect("/checked-in-babies");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});
module.exports = router;
