const wishDao = require("../models/wishDao");
const { ValidationError } = require("../middleware/errorCreator");

const wishCreateService = (nickName, comment) => {
  const regex = /^[a-zA-Zㄱ-ㅎ가-힣0-9]{1,9}$/;
  const regexTest = regex.test(nickName);
  if (!regexTest) {
    throw new ValidationError("특수문자 제외 한글 또는 영문 숫자를 포함한 8글자 이내여야 합니다.");
  }

  wishDao.createWish(nickName, comment);
};

module.exports = { wishCreateService };
