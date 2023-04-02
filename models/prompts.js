const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let promptSchema = mongoose.Schema({
   type : {
      type : String,
      enum : ["Image", "Text"],
      default : "Image"
   },
   title : {
      type : String
   },
   maxtokens : {
      type : Number
   },
   category : {
      type : Schema.Types.ObjectId,
      ref : 'categories'
   },
   questionlist : {
      type : [Schema.Types.ObjectId],
      ref : "questions"
   },
   isDeleted : {
      type : Boolean,
      default : false
   }
}, {timestamps: true});

const Prompt = mongoose.model("prompts", promptSchema);

module.exports = Prompt;