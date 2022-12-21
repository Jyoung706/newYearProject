const Wish = require("../schema/wishes");

const createWish = async (nickName, comment) => {
  const wish = new Wish({
    nickName: nickName,
    comment: comment,
  });
  const wishData = await wish.save();
};

module.exports = { createWish };
