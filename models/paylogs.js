const {MongoUnexpectedServerResponseError} = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let payLogSchema = mongoose.Schema({
   userId : {
      type : Schema.Types.ObjectId,
      ref : 'users'
   },
   username : {
      type : String,
   },
   currencyId : {
      type : Schema.Types.ObjectId,
      ref : 'currencies'
   },
   currencyName : {
      type : String,
   },
   paymethodId : {
      type : Schema.Types.ObjectId,
      ref : 'paymethods'
   },
   paymethod : {
      type : String
   },
   subscription : {
      type : Date,
      default : Date.now()
   },
   startAt : {
      type : Date,
      default : Date.now()
   },
   amount : {
      type : Schema.Types.Number,
      default : 0
   },
   status : {
      type: String,
      required: true,
      enum : ['pendding','error', 'success'],
   }

}, {timestamps: true});

const PayLog = mongoose.model("paylogs", payLogSchema);

module.exports = PayLog;