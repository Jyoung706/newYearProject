const wishDao = require("../models/wishDao");
const { nickNameRegex, badWordRegex, commentLengthRegex } = require("../common/regex");
const { ValidationError } = require("../middleware/errorCreator");
const { getCurrentDate } = require("../common/date");

const wishCreateService = async (uuid, nickName, comment) => {
  const uuidCheck = await wishDao.findWishByUuid(uuid);

  if (
    uuidCheck.length &&
    uuidCheck[uuidCheck.length - 1].createdAt.toLocaleDateString("ko-KR", {
      timeZone: "UTC",
    }) === getCurrentDate().toLocaleDateString("ko-KR", { timeZone: "UTC" })
  ) {
    throw new ValidationError("Already created");
  }

  const nickNameFilter = nickNameRegex;
  const regexTest = nickNameFilter.test(nickName);
  const badWordFilter = badWordRegex;
  const nickNameBadWordTest = badWordFilter.test(nickName);
  const badWordTest = badWordFilter.test(comment);
  const commentLengthFilter = commentLengthRegex;
  const commentLenthTest = commentLengthFilter.test(comment);

  if (!regexTest) {
    throw new ValidationError("특수문자 제외 한글 또는 영문 숫자를 포함한 8글자 이내여야 합니다.");
  }
  if (nickNameBadWordTest) {
    throw new ValidationError("비속어는 사용 금지입니다.");
  }
  if (badWordTest) {
    throw new ValidationError("비속어는 사용 금지입니다.");
  }
  if (!commentLenthTest) {
    throw new ValidationError("200글자 이하로 작성해주십시오");
  }
  return wishDao.createWish(uuid, nickName, comment);
};

const wishForMainService = () => {
  return wishDao.getWishForMain();
};

const detailWishForMainService = async (id, uuid) => {
  const [wishData] = await wishDao.findWishById(id);
  if (wishData.likeUser.includes(uuid)) {
    wishData.isLike = true;
  } else {
    wishData.isLike = false;
  }
  return wishData;
};

const findWishByKeyword = async (keyword, skip, limit) => {
  const regex = (pattern) => new RegExp(`.*${pattern}.*`);
  const keywordRegex = regex(keyword);
  skip = (skip - 1) * limit;
  return await wishDao.findWishByKeyword(keywordRegex, skip, limit);
};

const findMyWishList = async (uuid, skip, limit) => {
  skip = (skip - 1) * limit;
  return await wishDao.findMyWishList(uuid, skip, limit);
};

module.exports = {
  wishCreateService,
  wishForMainService,
  detailWishForMainService,
  findWishByKeyword,
  findMyWishList,
};
