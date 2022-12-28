const Wish = require("../schema/wishes");

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

// const findWishByUuid = async (uuid) => {
//   return await Wish.find({ uuid });
// };

// const createWish = async (uuid, nickName, comment) => {
//   const wish = new Wish({
//     uuid,
//     nickName,
//     comment,
//   });
//   const wishData = await wish.save();
//   return wishData;
// };

module.exports = { findWishListByTimeCount, findWishListByTime };
