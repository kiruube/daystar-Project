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
  if (req.session.user) {
  try {
    await RegisterBaby.deleteOne({ _id: req.body.id });
    res.redirect("back");
  } catch (error) {
    res.status(400).send("Unable to delete baby!");
    console.log("Error deleting  baby...", error);
  }
} else {
  res.redirect("/login");
}
});

//updating a baby in the database
// Route to fetch the update form for a specific baby
router.get("/babyUpdate/:id", async (req, res) => {
  if (req.session.user) {
  try {
    const babyUpdate = await RegisterBaby.findOne({ _id: req.params.id });
    res.render("babyUpdate", { baby: babyUpdate });
  } catch (error) {
    console.error("Error finding baby", error);
    res.status(400).send("Internal Server Error");
  }
} else {
  res.redirect("/login");
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
  if (req.session.user) {
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
} else {
  res.redirect("/login");
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

router.get("/checkinupdate/:id", async (req, res) => {
  if (req.session.user) {
  try {
    // Find the checked-in baby record by ID
    const babyCheckInOut = await BabyCheckInOut.findById(req.params.id);

    // Check if the checked-in baby exists
    if (!babyCheckInOut || babyCheckInOut.eventType !== "checkin") {
      // If the baby does not exist or is not checked in, return a 404 error
      return res.status(404).send("Checked-in baby not found");
    }

    // Fetch list of babies from the database
    const babies = await RegisterBaby.find();
    const availableSitters = await StaffRegistration.find({ role: "Sitter" }).select('fullName');

    // Render the update form with the checked-in baby's data, list of babies, and baby's name
    res.render("checkinupdate", { baby: babyCheckInOut, babies: babies, availableSitters: availableSitters, babyName: babyCheckInOut.babyName });
  } catch (error) {
    console.error("Error rendering check-in update form:", error);
    res.status(500).send("Internal Server Error");
  }
} else {
  res.redirect("/login");
}
});

router.post("/checkinupdate/:id", async (req, res) => {
  try {
    const babyId = req.params.id;

    // Update the checked-in baby record in the database with the new fields
    const updatedBabyCheckInOut = await BabyCheckInOut.findOneAndUpdate(
      { _id: babyId, eventType: "checkin" }, // Match condition
      { $set: req.body }, // Update with the request body
      { new: true } // To return the updated document
    );

    // If the checked-in baby record was not found, return a 404 error
    if (!updatedBabyCheckInOut) {
      return res.status(404).send("Checked-in baby not found");
    }

    // Redirect to the page where checked-in babies are listed
    res.redirect("/checked");
  } catch (error) {
    console.error("Error updating checked-in baby record:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Route to delete a checked-in baby
router.post("/checkedin/:id", async (req, res) => {
  if (req.session.user) {
  try {
    if (req.body._method === 'DELETE') {
      const babyId = req.params.id;
  
      // Find and delete the checked-in baby by ID
      await BabyCheckInOut.findByIdAndDelete(babyId);
  
      // Redirect to the page where checked-in babies are listed
      res.redirect("/checked");
    } else {
      res.status(400).send("Invalid request");
    }
  } catch (error) {
    console.error("Error deleting checked-in baby:", error);
    res.status(500).send("Internal Server Error");
  }
} else {
  res.redirect("/login");
}
});

router.get("/checkout/:id", async (req, res) => {
  if (req.session.user) {
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
} else {
  res.redirect("/login");
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
  if (req.session.user) {
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
} else {
  res.redirect("/login");
}
});

router.get("/checkoutupdate/:id", async (req, res) => {
  if (req.session.user) {
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
} else {
  res.redirect("/login");
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

// Route to display the record history of babies checked in
router.get("/checkinHistory", async (req, res, next) => {
  try {
    // Fetch the check-in records from the database, including the sitter information
    const checkinHistory = await BabyCheckInOut.find({ eventType: "checkin" })
      .populate({ path: 'sitter', select: 'fullName' })  // Populate sitter's fullName
      .select('checkinTime babyName sitter personBrought contactBrought periodOfStay');  // Select relevant fields

    // Render the checkinHistory.pug template with the fetched records
    res.render("checkinhis", { checkinHistory });
  } catch (error) {
    next(error);
  }
});

// Route to calculate payments for sitters and display them
router.get("/sitterPayments", async (req, res, next) => {
  try {
    // Retrieve the list of sitters
    const sitters = await StaffRegistration.find({ role: "Sitter" }).select('_id fullName');
    const sitterPayments = [];
    const ratePerBaby = 3000; // 3000 UGX per baby

    for (const sitter of sitters) {
      // Calculate the number of babies assigned to the sitter for the current day
      const currentDate = new Date().toISOString().slice(0, 10); // Get current date in YYYY-MM-DD format
      const assignedBabiesCount = await BabyCheckInOut.countDocuments({ sitter: sitter._id, checkinTime: { $gte: new Date(currentDate), $lt: new Date(currentDate + "T23:59:59.999Z") } });

      // Calculate payment based on the number of babies assigned
      const payment = assignedBabiesCount * ratePerBaby;

      sitterPayments.push({ sitterId: sitter._id, sitter: sitter.fullName, assignedBabiesCount, payment });
    }

    console.log("Sitter Payments calculated:", sitterPayments);

    // Store sitterPayments in the session
    req.session.sitterPayments = sitterPayments;

    res.render("sitterPayments", { sitterPayments }); // Pass sitterPayments to the template
  } catch (error) {
    next(error);
  }
});



module.exports = router;
