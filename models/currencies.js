const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let currencySchema = mongoose.Schema({
   name : {
      type : String,
      default : "US Dollar"
   },
   code : {
      type : String,
      default : "USD"
   },
   symbol : {
      type : String,
      default : "$"
   },
   isDeleted : {
      type : Boolean,
      default : false
   }
}, {timestamps: true});

const Currency = mongoose.model("currencies", currencySchema);

module.exports = Currency;