const express = require("express");
const router = express.Router();
const multer = require("multer");
const Purchase = require("../models/Purchase");

// Image upload
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
let upload = multer({ storage: storage });

// Get purchase form
router.get("/purchase", (req, res) => {
  res.render("purchase");
});

// POST route for Purchase form submission
router.post("/purchase", upload.single("itemImage"), async (req, res) => {
  if (req.session.user) {
  try {
    let itemImagePath = "";
    if (req.file && req.file.path) {
        itemImagePath = req.file.path;
    }
    
    const purchase = new Purchase({
      itemName: req.body.itemName,
      dateOfDelivery: req.body.dateOfDelivery,
      itemUnit: req.body.itemUnit,
      itemQuantity: req.body.itemQuantity,
      itemDescription: req.body.itemDescription,
      supplier: req.body.supplier,
      rate: req.body.rate,
      total: req.body.total,
      itemImage: itemImagePath,
    });
   console.log("_________________", itemImagePath )
    await purchase.save();
    res.redirect("/purchaseslists");
  } catch (error) {
    console.error("Error adding item.", error);
    res.status(400).render("purchase", { title: "Add Purchase" });
  }
} else {
  res.redirect("/login");
}
});

// Retrieve all Purchases
router.get("/purchaseslists", async (req, res) => {
  if (req.session.user) {
    try {
      let purchases = await Purchase.find();
      res.render("purchaselist", {
        title: "Purchase List",
        purchases: purchases,
      });
    } catch (error) {
      console.error("Error retrieving purchases:", error);
      res.status(500).send("Internal Server Error");
    }
  } else {
    res.redirect("/login");
  }
});

// Deleting an item from the database
router.post("/purchasedelete", async (req, res) => {
  try {
    await Purchase.deleteOne({ _id: req.body.id });
    res.redirect("back");
  } catch (error) {
    res.status(400).send("Unable to delete item!");
    console.log("Error deleting item...", error);
  }
});

// Get route for updating an item
router.get("/purchase/update/:id", async (req, res) => {
  try {
    const purchase = await Purchase.findById(req.params.id);
    if (!purchase) {
      return res.status(404).send("Purchase not found");
    }
    res.render("purchaseupdate", { title: "Update Purchase", purchase });
  } catch (error) {
    console.error("Error finding purchase:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Post route for updating an item
router.post("/purchase/update/:id", async (req, res) => {
  try {
    const purchase = await Purchase.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!purchase) {
      return res.status(404).send("Purchase not found");
    }
    res.redirect("/purchaseslists");
  } catch (error) {
    console.error("Error updating purchase:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
