const likeService = require("../services/likeService");

const likeController = async (req, res) => {
  const likeData = req.body;

  await likeService.likeService(likeData);

  res.status(200).json({ message: "request complete" });
};

const myLikeController = async (req, res) => {
  const { uuid, page } = req.query;

  const likeData = await likeService.myLikeService(uuid, page);

  res.status(200).json(likeData);
};

module.exports = { likeController, myLikeController };
