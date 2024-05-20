const mongoose = require("mongoose");

const staffRegistrationSchema = new mongoose.Schema({
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
    nok:{
        type: String,
        trim: true
    },
    education:{
        type: String,
        trim: true
    },
    recommendersName:{
        type: String,
        trim: true
    },
    kabalagaResident:{
        type: String,
        trim: true
    },
    role:{
        type: String,
        trim: true
    },
    staffNumber:{
        type: String,
        unique: true
    }

});

module.exports = mongoose.model("StaffRegistration", staffRegistrationSchema);