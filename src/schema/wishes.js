const mongoose = require("mongoose");
const { Schema } = mongoose;

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
      required: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
    likeUser: {
      type: Array,
      defalut: [],
    },
    isLike: {
      type: Boolean,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("Wish", wishSchema);
