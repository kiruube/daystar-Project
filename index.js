const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");//new line
const path = require("path");
const passport = require("passport");
const moment = require("moment");
const expressSession = require("express-session")({
    secret: "secret",
    resave: false,
    saveUninitialized: false
  }); 
require("dotenv").config();

// import models
const AdminRegistration = require("./models/adminRegistration");
// set port
const port = 3001;

// import routes
const accountsRoutes = require("./routes/accountsRoutes")
const registrationRoutes = require("./routes/babyRoutes");
const adminRegistration = require("./routes/adminRegRoutes");
const authenticationRoutes = require("./routes/authenticationRoutes");
const purchasesRoutes = require("./routes/purchases");
const reportRoutes= require("./routes/reportRoutes");
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

 app.locals.moment = moment;

// set view engine to pug
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));


//  Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use("/public/images/uploads", express.static(__dirname +"/public/images/uploads"));
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
app.use("/", purchasesRoutes);
app.use("/", accountsRoutes);
app.use("/", reportRoutes);

// For invalid routes
app.get("*",  (req, res) => {
    res.send("404! This is an invalid URI");
  });
  
// boostrap server
app.listen(port,()=> console.log(`listening on port ${port}`));
