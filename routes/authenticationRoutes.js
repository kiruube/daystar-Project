const express = require("express");
const router =express.Router();
const passport = require("passport");
const crypto = require("crypto");

router.get("/login", (req, res) =>{
    res.render("login");
});

//importation
const AdminRegistration = require("../models/adminRegistration");

// passport.authenticate("local", {failureRedirect:"/login"}),
// router.post("/login", async(req, res) =>{
//     const {email,password} = req.body;
//     try {
//         console.log(req.body);
//         let user = await AdminRegistration.findOne({email});
//         if (!user) {
//             res.status(404).json({message:"User does not exist!"})
//         }
//         const hash = crypto.pbkdf2Sync(password, user.salt, 10000, 64, 'sha512').toString('hex');
//         if (hash !== user.password) {
//             return res.status(401).json({message:"Incorrect password"})
//         }
//       res.redirect("/register")
//     } catch (error) {
//         console.log("Error logging in!", error)
//         res.status(500).json({message:"Internal server error.."})
//     }
  
// });

router.post("/login", passport.authenticate("local", {failureRedirect:"/login"}), (req, res) =>{
    req.session.user = req.user
    res.redirect("/register");
});

router.get("/logout", (req, res) =>{
   if(req.session){
    req.session.destroy((error) => {
        if(error){
            return res.status(500).send("Error logging out..")
        }
        res.redirect("/login");
    })
   }
});

module.exports = router;