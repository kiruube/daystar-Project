const express = require("express");
const router = express.Router();

//Import model
const BabyCheckInOut = require("../models/Check");
const StaffRegistration = require("../models/StaffRegistration");
const RegisterBaby = require("../models/RegisterBabies");

//Get route
router.get("/register", (req, res) => {
  res.render("babyreg");
});

// post route
//installing the async function
router.post("/register", async (req, res) => {
  if (req.session.user) {
    try {
      const baby = new RegisterBaby(req.body);
      console.log(baby);
      await baby.save();
      res.redirect("/register");
    } catch (error) {
      res.status(400).send("Sorry! Something wrong happened");
      console.log("Error registering a baby.", error);
    }
  } else {
    res.redirect("/login");
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
    res.render("babyUpdate", { baby: babyUpdate });
  } catch (error) {
    console.error("Error finding baby", error);
    res.status(400).send("Internal Server Error");
  }
});

router.post("/babyUpdate", async (req, res) => {
  try {
    await RegisterBaby.findOneAndUpdate({ _id: req.query.id }, req.body, {
      new: true,
    });
    res.redirect("/babyList");
  } catch (error) {
    console.error("Error updating baby:", error);
    res.status(404).send("Internal Server Error");
  }
});
 
// Route to render the check-in form
router.get("/checkin", async (req, res) => {
  try {
    // Fetch available sitters from the database
    const availableSitters = await StaffRegistration.find({ role: "Sitter" }).select('fullName');
    console.log(availableSitters);
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
    const newCheckin = new BabyCheckInOut(req.body);
    newCheckin.checkinTime = new Date();
    newCheckin.eventType = "checkin";

    await newCheckin.save();

    res.redirect("/checked");
  } catch (error) {
    console.error("Error checking in baby:", error);
    res.status(500).send("Internal Server Error");
  }
});

//Route to display the list of checked-in babies
router.get("/checked", async (req, res) => {
  try {
    // Fetch list of checked-in babies from the database
    const checkedInBabies = await BabyCheckInOut.find({ eventType: "checkin" }).populate({ 
    path: 'sitter',
    select: 'fullName'
  });
    // Render the page with the list of checked-in babies
    res.render("checked", { babies: checkedInBabies });
  } catch (error) {
    console.error("Error fetching checked-in babies:", error);
    res.status(500).send("Internal Server Error");
  }
});


router.get("/checkout/:id", async (req, res) => {
  try {
    console.log("Rendering checkout form for a specific baby...");
    // Find the baby by ID
    const baby = await BabyCheckInOut.findById(req.params.id);

    // Check if the baby exists
    if (!baby) {
      // If the baby does not exist, return a 404 error
      return res.status(404).send("Baby not found");
    }

    // Render the checkout form with the baby's name as a parameter
    res.render("checkout", { baby: baby, babyName: baby.babyName }); // Pass the entire baby object to the template
  } catch (error) {
    console.error("Error rendering checkout form:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Route to handle checkout form submission
router.post("/checkout/:id", async (req, res) => {
  try {
    console.log("Processing checkout form submission...");
    const babyId = req.params.id;
    const checkoutDetails = req.body;

    // Update the checkout details for the baby in the database
    await BabyCheckInOut.findByIdAndUpdate(babyId, { ...checkoutDetails, eventType: "checkout", checkoutTime: new Date() });

    console.log("Redirecting to /checkedout after checkout...");
    res.redirect("/checkedout");
  } catch (error) {
    console.error("Error handling checkout form submission:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Route to display a list of checked-out babies
router.get("/checkedout", async (req, res) => {
  try {
    console.log("Fetching list of checked-out babies...");
    // Fetch list of checked-out babies from the database
    const checkedOutBabies = await BabyCheckInOut.find({ eventType: "checkout" });
    const babyNames = checkedOutBabies.map(baby => baby.babyName);
    // Render the checkedout.pug template with the list of checked-out babies
    console.log("Rendering checkedout.pug template with checked-out babies...");
    res.render("checkedout", { babies: checkedOutBabies, babyNames: babyNames });
  } catch (error) {
    console.error("Error fetching checked-out babies:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/checkoutupdate/:id", async (req, res) => {
  try {
    const babyId = req.params.id;
    // Fetch the checked-out baby's information from the database
    const checkedOutBaby = await BabyCheckInOut.findById(babyId);
    
    // If no baby is found with the given ID, return a 404 Not Found response
    if (!checkedOutBaby) {
      console.error("Checked-out baby not found");
      return res.status(404).send("Checked-out baby not found");
    }

    // Render the update form template with the checked-out baby's data
    res.render("checkoutupdate", { checkedOutBaby });
  } catch (error) {
    console.error("Error fetching checked-out baby details:", error);
    res.status(500).send("Internal Server Error");
  }
});


router.post("/checkoutupdate/:id", async (req, res) => {
  try {
    const babyId = req.params.id;
    // Update the person picking up, contact number, and checkout notes for the baby in the database
    await BabyCheckInOut.findByIdAndUpdate(babyId, req.body, { new: true });

    console.log("Checkout details updated successfully.");
    res.redirect("/checkedout");
  } catch (error) {
    console.error("Error updating checkout details:", error);
    res.status(500).send("Internal Server Error");
  }
});



module.exports = router;
