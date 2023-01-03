const likeDao = require("../models/likeDao");
const { ValidationError, BadRequestError } = require("../middleware/errorCreator");

const likeService = async (likeData) => {
  const { like, uuid, id } = likeData;

  if (like !== true && like !== false) {
    throw new ValidationError("like must be a Boolean type");
  }

  const [validateLike] = await likeDao.validationLike(id, uuid);

  if (validateLike) {
    if (like === true) {
      throw new BadRequestError("이미 좋아요를 누른 유저입니다.");
    } else if (like === false) {
      likeDao.removeLike(likeData);
      const [likeCount] = await likeDao.getLikeCount(id);
      likeCount.isLike = false;
      return likeCount;
    }
  }

  if (!validateLike) {
    if (like === true) {
      likeDao.createLike(likeData);
      const [likeCount] = await likeDao.getLikeCount(id);
      likeCount.isLike = true;
      return likeCount;
    } else if (like === false) {
      throw new BadRequestError("좋아요를 누른 이력이 존재하지 않습니다.");
    }
  }
};

const myLikeService = async (uuid, skip, limit) => {
  skip = (skip - 1) * limit;
  const wishData = await likeDao.getMyLikeWish(uuid, skip, limit);
  wishData.map((val) => {
    val.isLike = true;
  });
  return wishData;
};
module.exports = { likeService, myLikeService };
