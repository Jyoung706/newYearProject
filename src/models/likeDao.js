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

const getMyLikeWish = (uuid, skip, limit) => {
  return Wish.aggregate([{ $match: { likeUser: uuid } }, { $skip: skip }, { $limit: +limit }]);
};

const getLikeCount = (id) => {
  return Wish.find({ _id: id }, { likes: 1 });
};

module.exports = { createLike, removeLike, validationLike, getMyLikeWish, getLikeCount };
