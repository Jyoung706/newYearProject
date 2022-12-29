const Wish = require("../schema/wishes");

const createLike = async (likeData) => {
  const { id, uuid } = likeData;

  await Wish.findByIdAndUpdate(id, { $inc: { likes: 1 }, $push: { likeUser: uuid } });
};

const removeLike = async (likeData) => {
  const { id, uuid } = likeData;

  await Wish.findByIdAndUpdate(id, { $inc: { likes: -1 }, $pull: { likeUser: uuid } });
};

const validationLike = async (id, uuid) => {
  return await Wish.find({ $and: [{ _id: id }, { likeUser: uuid }] });
};

const getMyLikeWish = (uuid, page) => {
  return Wish.aggregate([{ $match: { likeUser: uuid } }, { $skip: (page - 1) * 4 }, { $limit: 4 }]);
};

module.exports = { createLike, removeLike, validationLike, getMyLikeWish };
