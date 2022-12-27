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
      return;
    }
  }

  if (!validateLike) {
    if (like === true) {
      likeDao.createLike(likeData);
      return;
    } else if (like === false) {
      throw new BadRequestError("좋아요를 누른 이력이 존재하지 않습니다.");
    }
  }
};

module.exports = { likeService };
