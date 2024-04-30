const mongoose = require("mongoose");

const PurchaseSchema = new mongoose.Schema({
    itemName:{
        type: String,
        trim: true
    },
    itemUnit:{
        type: String,
        trim: true
    },
    itemPrice:{
        type: String,
        trim: true
    },
    itemDescription:{
        type: String,
        trim: true
    },
    itemImage:{
        type: String,
        trim: true
    }
}); 

module.exports = mongoose.model("Purchase", PurchaseSchema);