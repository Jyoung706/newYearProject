const wishService = require("../services/wishServices");

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

module.exports = {
  wishCreateController,
  wishForMainController,
  detailWishForMainController,
  findWishByKeyword,
  findMyWishList,
};
