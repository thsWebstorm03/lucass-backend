const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let toneSchema = mongoose.Schema({
   tone : {
      type : String,
      default : "Friendly"
   },
   isDeleted : {
      type : Boolean,
      default : false
   }
}, {timestamps: true});

const Tone = mongoose.model("tones", toneSchema);

module.exports = Tone;