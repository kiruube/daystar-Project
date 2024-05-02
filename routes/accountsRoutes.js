const express = require('express');
const router = express.Router();

//Import model
const Accounts = require('../models/accounts');

// Render Accounts form
router.get("/accounts", (req, res) => {
    res.render("accounts"); // Assuming you have a view named "accounts"
});

// post route 
//installing the async function
router.post("/accounts", async (req, res) => {
  try {
    const records = new Accounts(req.body);
    console.log(records);
    await records.save();
    res.redirect("/accounts");
  } catch (error) {
    res.status(400).send("Sorry! Something wrong happened");
    console.log("Error registering record.", error);
  }
});

// Route to fetch all accounts records
router.get('/accrecords', async (req, res) => {
  try {
    const records = await Accounts.find();
    res.render('accountslist', {records: records});
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route to update an existing accounts record
router.get("/accountsupdate/:id", async (req,res) => {
try {
  const recordupdate = await Accounts.findOne({ _id: req.params.id });
  res.render("accountsupdate", {record: recordupdate})
} catch (error) {
  console.err("Error finding record:", err);
  res.status(500).json({ message: "Internal Server Error" });
}
});

router.post('/accountsupdate', async (req, res) => {
  try {
     await Accounts.findOneAndUpdate({_id: req.query.id}, req.body,{
      new: true,
  });
    res.redirect("/accountslist");
  } catch (err) {
    console.err("Error updating record:", err);
    res.status(500).json({ message: "Error updating Record.." });
  }
});

// Route to delete an existing accounts record
router.post('/delete', async (req, res) => {
  try {
    await Accounts.deleteOne({_id: req.body.id});
    res.redirect("back")
  } catch (err) {
    res.status(400).json({ message: "Unable to delete record.."});
  }
});

module.exports = router;
