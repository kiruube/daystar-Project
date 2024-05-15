const express = require("express");
const router =express.Router();
const passport = require("passport");

//get route for login
router.get("/login", (req, res) =>{
    res.render("login");
});

//Post route for login
router.post("/login", passport.authenticate("local", {failureRedirect:"/login"}), (req, res) =>{
    req.session.user = req.user
    res.redirect("/dashboard");
});

//logout route
router.get("/logout", (req, res) =>{
   if(req.session){
       req.session.destroy((error) => {
          if(error){
              return res.status(500).send("Error logging out..")
          }
          res.redirect("/");
    })
   }
});



 //index page route
 router.get("/", (req,res) =>{
    res.render("index")
  });

module.exports = router;