const express = require("express");
const router = express.Router();
const multer = require("multer");
const Purchase = require("../models/Purchase");

// Image upload
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images/uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});
var upload = multer({ storage: storage });

// Get purchase form
router.get("/purchase", (req, res) => {
    res.render("purchase");
});

// Post route for Purchase
router.post("/purchase", upload.single('imageupload'), async (req, res) => {
    try {
        const purchase = new Purchase(req.body);
        purchase.itemImage = req.file.path;
        console.log("purchase", purchase);
        await purchase.save();
        res.redirect("/purchase");
    } catch (error) {
        res.status(400).render("purchase", { title: "Add Purchase" });
        console.log("Error adding item.", error);
    }
});

// Retrieve all Purchases
router.get("/purchaselist", async (req, res) => {
    if (req.session.user) {
        try {
            let items = await Purchase.find();
            res.render("purchaselist", {
                title: "Purchase List",
                purchases: items
            });
        } catch (error) {
            console.error("Error retrieving purchases:", error);
            res.status(500).send("Internal Server Error");
        }
    } else {
        res.redirect("/purchaselist");
    }
});

// Deleting an item from the database
router.post("/delete", async (req, res) => {
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
        res.render("update_purchase", { title: "Update Purchase", purchase });
    } catch (error) {
        console.error("Error finding purchase:", error);
        res.status(500).send("Internal Server Error");
    }
});

// Post route for updating an item
router.post("/purchase/update/:id", async (req, res) => {
    try {
        const purchase = await Purchase.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!purchase) {
            return res.status(404).send("Purchase not found");
        }
        res.redirect("/purchaselist");
    } catch (error) {
        console.error("Error updating purchase:", error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
