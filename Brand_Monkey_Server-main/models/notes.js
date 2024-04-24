const mongoose = require("mongoose");
const noteSchema = mongoose.Schema(
  {
    authorName: {
      type: String,
      default : "",
    },
    notes: {
      type: String,
      require : false
    },
  },
  { timestamps: true }
);

const Notes = mongoose.model("note", noteSchema);
module.exports = Notes;
