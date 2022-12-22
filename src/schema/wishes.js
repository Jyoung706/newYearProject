const mongoose = require("mongoose");
const { Schema } = mongoose;
const { getCurrentDate } = require("../common/date");

const wishSchema = new Schema(
  {
    uuid: {
      type: String,
      required: true,
    },
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
      default: getCurrentDate(),
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("Wish", wishSchema);
