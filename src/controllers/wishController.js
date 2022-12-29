const wishService = require("../services/wishServices");

const wishCreateController = async (req, res) => {
  const { uuid, nickName, comment } = req.body;

  const wishData = await wishService.wishCreateService(uuid, nickName, comment);

  res.status(201).json({ message: "create success", wishData });
};

const wishForMainController = async (req, res) => {
  const wishData = await wishService.wishForMainService();
  res.status(201).json(wishData);
};

module.exports = { wishCreateController, wishForMainController };
