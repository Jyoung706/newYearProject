const likeService = require("../services/likeService");

const likeController = async (req, res) => {
  const likeData = req.body;

  await likeService.likeService(likeData);

  res.status(400).json({ message: "request complete" });
};

module.exports = { likeController };
