const wishDao = require("../models/wishDao");
const { nickNameRegex, commentFilter } = require("../common/regex");
const { ValidationError } = require("../middleware/errorCreator");
const { getCurrentDate } = require("../common/date");

const wishCreateService = async (uuid, nickName, comment) => {
  const uuidCheck = await wishDao.findWishByUuid(uuid);

  if (
    uuidCheck.length &&
    uuidCheck[0].createdAt.toLocaleDateString("ko-KR", { timeZone: "UTC" }) ===
      getCurrentDate().toLocaleDateString("ko-KR", { timeZone: "UTC" })
  ) {
    throw new ValidationError("오늘 이미 소원을 작성한 유저입니다.");
  }

  const regex = nickNameRegex;
  const regexTest = regex.test(nickName);
  const badWord = commentFilter;
  const badWordTest = badWord.test(comment);

  if (!regexTest) {
    throw new ValidationError("특수문자 제외 한글 또는 영문 숫자를 포함한 8글자 이내여야 합니다.");
  }
  if (badWordTest) {
    throw new ValidationError("비속어는 사용 금지입니다.");
  }
  return wishDao.createWish(uuid, nickName, comment);
};

module.exports = { wishCreateService };