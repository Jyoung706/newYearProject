const wishService = require("../services/wishServices");

const wishDuplicationCheck = async (req, res) => {
  const { uuid } = req.query;

  await wishService.wishDuplicationCheck(uuid);

  res.status(200).json({ message: "Nothing Duplication" });
};

const wishCreateController = async (req, res) => {
  const { uuid, nickName, comment } = req.body;

  const wishData = await wishService.wishCreateService(uuid, nickName, comment);

  res.status(201).json({ message: "create success", wishData });
};

const wishForMainController = async (req, res) => {
  const wishData = await wishService.wishForMainService();
  res.status(200).json(wishData);
};

const detailWishForMainController = async (req, res) => {
  const { uuid, id } = req.query;

  const wishData = await wishService.detailWishForMainService(id, uuid);

  res.status(200).json(wishData);
};

const findWishByKeyword = async (req, res) => {
  const { keyword, skip, limit } = req.query;

  const wishes = await wishService.findWishByKeyword(keyword, skip, limit);

  res.status(200).json(wishes);
};

const findMyWishList = async (req, res) => {
  const { uuid, skip, limit } = req.query;

  const wishes = await wishService.findMyWishList(uuid, skip, limit);

  res.status(200).json(wishes);
};

const wishCountController = async (req, res) => {
  const wishCount = await wishService.wishCountService();

  res.status(200).json({ wishes: wishCount });
};

module.exports = {
  wishDuplicationCheck,
  wishCreateController,
  wishForMainController,
  detailWishForMainController,
  findWishByKeyword,
  findMyWishList,
  wishCountController,
};
