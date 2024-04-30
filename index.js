const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");//new line
const path = require("path");
const passport = require("passport");
// const momoent = require("momoent");
const expressSession = require("express-session")({
    secret: "secret",
    resave: false,
    saveUninitialized: false
  });
  
require("dotenv").config();

// import models
const AdminRegistration = require("./models/adminRegistration");
// set port
const port = 3003;

// import routes
const registrationRoutes = require("./routes/babyRoutes");
const adminRegistration = require("./routes/adminRegRoutes");
const authenticationRoutes = require("./routes/authenticationRoutes");
const dollStallRoutes = require("./routes/dollStallRoutes");
//instantiate the app
const app = express();

// Configurations

// set db connection to mongoose
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", err => {
    console.error(`Connection error: ${err.message}`);
 });


// set view engine to pug
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));


//  Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());//new line

// express session configs
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());

// passport configs
passport.use(AdminRegistration.createStrategy());
passport.serializeUser(AdminRegistration.serializeUser());
passport.deserializeUser(AdminRegistration.deserializeUser());


//Use imported routes
app.use("/", registrationRoutes);
app.use("/", adminRegistration);
app.use("/", authenticationRoutes);
app.use("/", dollStallRoutes);
// For invalid routes
app.get("*", function (req, res) {
    res.send("404! This is an invalid URI");
  });
  
// boostrap server
app.listen(port,()=> console.log(`listening on port ${port}`));
