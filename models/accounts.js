const mongoose = require('mongoose');

const AccountsSchema = new mongoose.Schema({
  recordType: { 
    type: String, 
    trim: true
 },
  recordRefNo: {
     type: String, 
     trim: true 
    },
  recordDate: {
     type: Date, 
     trim: true
     },
  recordDescription: {
     type: String, 
     trim: true
     },
  recordAmount: { 
    type: Number,
     trim: true
     }
});

const Accounts = mongoose.model('Accounts', AccountsSchema);
module.exports = Accounts;
