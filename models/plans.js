const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let planSchema = mongoose.Schema({
   title : {
      type : String,
      default : 'Free'
   },
   monthly : {
      type : Number
   },
   yearly : {
      type : Number
   },
   type : {
      type : String,
      enum : ["Paid", "Free"],
      default : "Paid"
   },
   wordlimit : {
      type : Number
   },
   imagelimit : {
      type : Number
   },
   isDeleted : {
      type : Boolean,
      default : false
   }
}, {timestamps: true});

const Plan = mongoose.model("plans", planSchema);

module.exports = Plan;