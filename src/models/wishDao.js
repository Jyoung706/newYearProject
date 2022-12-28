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

module.exports = { createWish, findWishByUuid };
