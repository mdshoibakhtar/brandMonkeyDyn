const mongoose = require("mongoose");

const { Schema } = mongoose;

const reviewSchema = mongoose.Schema({
  employeeData: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "employees",
  },
  reviews: [
    {
      client: {
        type: String,
        required: false,
      },
      review: {
        type: String,
        required: false,
      },
      goodOrBad: {
        type: String,
        required: false,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      updatedAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const EmployeeReview = mongoose.model("employeeReviews", reviewSchema);
module.exports = EmployeeReview;
