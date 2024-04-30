const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const adminregistrationSchema = new mongoose.Schema({
    fullName:{
        type: String,
        trim: true
    },
    gender:{
        type: String,
        trim: true
    },
    dateOfBirth:{
        type: String,
        trim: true
    },
    religion:{
        type: String,
        trim: true
    },
    location:{
        type: String,
        trim: true
    },
    phone:{
        type: String,
        trim: true
    },
    email:{
        type: String,
        trim: true
    },
    nationality:{
        type: String,
        trim: true
    },
    nin:{
        type: String,
        trim: true
    },
    userName:{
        type: String,
        trim: true
    },
    // password:{
    //     type: String,
    //     trim: true
    // },
    role:{
        type: String,
        trim: true
    }
});

adminregistrationSchema.plugin(passportLocalMongoose, {
    usernameField:"email"
    }) ;
module.exports = mongoose.model("RegisterAdmin", adminregistrationSchema);