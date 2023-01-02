const Wish = require("../schema/wishes");

const findWishByUuid = async (uuid) => {
  return await Wish.find({ uuid });
};

const createWish = async (uuid, nickName, comment) => {
  const wish = new Wish({
    uuid,
    nickName,
    comment,
  });
  const wishData = await wish.save();
  return wishData;
};

const findWishListByTimeCount = async (pre_time, curr_time) => {
  return await Wish.find({
    createdAt: {
      $gte: pre_time,
      $lte: curr_time,
    },
  }).count();
};

const findWishListByTime = async (pre_time, curr_time, sikp, limit) => {
  return await Wish.find(
    {
      createdAt: {
        $gte: pre_time,
        $lte: curr_time,
      },
    },
    { _id: 0, comment: 1 }
  )
    .skip(sikp)
    .limit(limit);
};

const getWishForMain = async () => {
  return await Wish.aggregate([
    { $sample: { size: 8 } },
    { $project: { likes: 1 } },
  ]);
};

const findWishById = async (id) => {
  return await Wish.find({ _id: id });
};

const findWishByKeyword = async (keyword, skip, limit) => {
  return await Wish.find({ comment: { $regex: keyword } })
    .skip(skip)
    .limit(limit);
};

const findMyWishList = async (uuid, skip, limit) => {
  return await Wish.find({ uuid: uuid }).skip(skip).limit(limit);
};

module.exports = {
  createWish,
  findWishByUuid,
  findWishListByTimeCount,
  findWishListByTime,
  getWishForMain,
  findWishById,
  findWishByKeyword,
  findMyWishList,
};
