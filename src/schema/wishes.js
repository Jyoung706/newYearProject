const mongoose = require("mongoose");

const { Schema } = mongoose;

const wishSchema = new Schema(
  {
    nickName: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("Wish", wishSchema);
