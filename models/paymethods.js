const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let payMethodSchema = mongoose.Schema({
   method : {
      type : String,
      default : "PayPal"
   },
   isDeleted : {
      type : Boolean,
      default : false
   }
}, {timestamps: true});

const PayMethod = mongoose.model("paymethods", payMethodSchema);

module.exports = PayMethod;