const likeService = require("../services/likeService");

const likeController = async (req, res) => {
  const likeData = req.body;

  const likeCount = await likeService.likeService(likeData);

  res.status(200).json(likeCount);
};

const myLikeController = async (req, res) => {
  const { uuid, skip, limit } = req.query;

  const likeData = await likeService.myLikeService(uuid, skip, limit);

  res.status(200).json(likeData);
};

module.exports = { likeController, myLikeController };
