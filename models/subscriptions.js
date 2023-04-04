const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let subscriptionSchema = mongoose.Schema({
   user : {
      type : Schema.Types.ObjectId,
      ref : "users"
   },
   plan : {
      type : Schema.Types.ObjectId,
      ref : "plans"
   },
   startAt : {
      type : Date,
      default : Date.now()
   },
   endAt : {
      type : Date,
      default : Date.now()
   },
   canceledAt : {
      type : Date,
      default : Date.now()
   },
   status : {
      type : String,
      enum : ["Wating", "Pending", "Active"],
      default : "Pending"
   },
   frequency : {
      type : String
   },
   isDeleted : {
      type : Boolean,
      default : false
   }
}, {timestamps: true});

const Subscription = mongoose.model("subscriptions", subscriptionSchema);

module.exports = Subscription;