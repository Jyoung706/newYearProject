const mongoose = require("mongoose");
const { Schema } = mongoose;

const keyWordSchema = new Schema(
  {
    keyword: {
      type: String,
      required: true,
    },
    frequency: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("keyWord", keyWordSchema);
