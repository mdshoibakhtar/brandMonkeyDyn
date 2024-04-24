const mongoose = require("mongoose");

const clientSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
    },
    clientLogo: {
      type: String,
      default: "",
    },
    GST: {
      type: String,
      required: false,
    },
    State: {
      type: String,
      required: false,
    },
    Country: {
      type: String,
      required: false,
    },
    Address: {
      type: String,
      required: false,
    },
    // Reels: {
    //   type: String,
    //   default: "NA",
    // },
    // Flyer: {
    //   type: String,
    //   default: "NA",
    // },
    // "Facebook Ads": {
    //   type: String,
    //   default: "NA",
    // },
    // "Google Ads": {
    //   type: String,
    //   default: "NA",
    // },
    // SEO: {
    //   type: String,
    //   default: "NA",
    // },
    // GMB: {
    //   type: String,
    //   default: "NA",
    // },
    // "Youtube Management": {
    //   type: String,
    //   default: "NA",
    // },
    // Ecommerce: {
    //   type: String,
    //   default: "NA",
    // },
    // "Social Media Management": {
    //   type: String,
    //   default: "NA",
    // },
    // Photography: {
    //   type: String,
    //   default: "NA",
    // },
    // Videography: {
    //   type: String,
    //   default: "NA",
    // },
    // "Content Creator": {
    //   type: String,
    //   default: "NA",
    // },
    // Website: {
    //   type: String,
    //   default: "NA",
    // },
    // Management: {
    //   type: String,
    //   default: "NA",
    // },
    clientType: {
      type: String,
      enum: ["Regular", "Onetime"],
      default: "Regular",
    },
    colorZone: { type: String },
    logo: { type: String },
  },
  { strict: false }
);

const Clients = mongoose.model("clients", clientSchema);
module.exports = Clients;
