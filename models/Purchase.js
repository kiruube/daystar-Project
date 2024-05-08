const mongoose = require("mongoose");

const PurchaseSchema = new mongoose.Schema({
    itemName:{
        type: String,
        trim: true
    },
    dateOfDelivery:{
        type: String,
        trim: true  
    },
    itemUnit:{
        type: String,
        trim: true
    },
    itemQuantity:{
        type: String,
        trim: true
    },
    rate:{
        type: Number,
        trim: true
    },
    total:{
        type: Number,
        trim: true
    },
    itemDescription:{
        type: String,
        trim: true
    },
    supplier:{
        type: String,
        trim: true 
    },
    itemImage:{
        type: String,
        trim: true
    }
}); 

module.exports = mongoose.model("Purchase", PurchaseSchema);