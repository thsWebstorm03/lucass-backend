const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let promptLogSchema = mongoose.Schema({
   user : {
      type : Schema.Types.ObjectId,
      ref : 'users'
   },
   pathname : {
      type : String
   },
   title : {
      type : String
   },
   prompt : {
      type : Schema.Types.ObjectId,
      ref : 'prompts'
   },
   questionlist : {
      type : [String]
   },
   answerlist : {
      type : [String]
   },
   tone : {
      type : String,
      default : "Friendly"
   },
   content : {
      type : String,
      default : ""
   },
   isDeleted : {
      type : Boolean,
      default : false
   }
}, {timestamps: true});

const PrommptLog = mongoose.model("promptlogs", promptLogSchema);

module.exports = PrommptLog;