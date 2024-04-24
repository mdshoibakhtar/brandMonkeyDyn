const mongoose = require("mongoose");
const { Schema } = mongoose;
const momSchema = mongoose.Schema(
  {
    clientId: {
      type: Schema.Types.ObjectId,
      ref: "clients",
    },
    topicDiscuss: {
      type: String,
      require : false
    },
    complain: {
      type: String,
      require : false
    },
    feedback: {
      type: String,
    },
    attendees: { type: String, default : "" },
  },
  { timestamps: true }
);

const MomData = mongoose.model("MOM_Data", momSchema);
module.exports = MomData;
