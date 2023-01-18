const wishDao = require('../models/wishDao');
const { nickNameRegex, badWordRegex, commentLengthRegex } = require('../common/regex');
const { ValidationError, BadRequestError } = require('../middleware/errorCreator');
const { getCurrentDate } = require('../common/date');

const wishDuplicationCheck = async uuid => {
  const uuidCheck = await wishDao.findWishByUuid(uuid);
  if (!uuidCheck.length) return;
  const latestWishTime = uuidCheck[uuidCheck.length - 1].createdAt.toLocaleDateString('ko-KR', {
    timeZone: 'UTC',
  });
  const currentTime = getCurrentDate().toLocaleDateString('ko-KR', {
    timeZone: 'UTC',
  });

  if (uuidCheck.length && latestWishTime === currentTime) {
    throw new ValidationError('Already created');
  }
};

const wishCreateService = async (uuid, nickName, comment) => {
  const nickNameFilter = nickNameRegex;
  const regexTest = nickNameFilter.test(nickName);
  const badWordFilter = badWordRegex;
  const nickNameBadWordTest = badWordFilter.test(nickName);
  const badWordTest = badWordFilter.test(comment);
  const commentLengthFilter = commentLengthRegex;
  const commentLenthTest = commentLengthFilter.test(comment);

  if (!regexTest) {
    throw new ValidationError('특수문자 제외 한글 또는 영문 숫자를 포함한 8글자 이내여야 합니다.');
  }
  if (nickNameBadWordTest) {
    throw new ValidationError('비속어는 사용 금지입니다.');
  }
  if (badWordTest) {
    throw new ValidationError('비속어는 사용 금지입니다.');
  }
  if (!commentLenthTest) {
    throw new ValidationError('200글자 이하로 작성해주십시오');
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

const findWishByKeyword = async (keyword, skip, limit, uuid) => {
  if (keyword.length == 0) {
    throw new BadRequestError('키워드에는 null 값이 들어갈 수 없습니다.');
  }

  const regex = pattern => new RegExp(`.*${pattern}.*`);
  const keywordRegex = regex(keyword);
  skip = (skip - 1) * limit;

  const searchWishes = await wishDao.findWishByKeyword(keywordRegex, skip, limit);

  for (let i = 0; i < searchWishes.length; i++) {
    if (searchWishes[i].likeUser.includes(uuid)) {
      searchWishes[i].isLike = true;
    } else {
      searchWishes[i].isLike = false;
    }
  }

  return searchWishes;
};

const findMyWishList = async (uuid, skip, limit) => {
  skip = (skip - 1) * limit;
  const myWishes = await wishDao.findMyWishList(uuid, skip, limit);

  for (let i = 0; i < myWishes.length; i++) {
    if (myWishes[i].likeUser.includes(uuid)) {
      myWishes[i].isLike = true;
    } else {
      myWishes[i].isLike = false;
    }
  }

  return myWishes;
};

const wishCountService = () => {
  return wishDao.getAllWishCount();
};

module.exports = {
  wishDuplicationCheck,
  wishCreateService,
  wishForMainService,
  detailWishForMainService,
  findWishByKeyword,
  findMyWishList,
  wishCountService,
};
