const wishService = require("../services/wishServices");

const wishCreateController = async (req, res) => {
  const { uuid, nickName, comment } = req.body;

  const wishData = await wishService.wishCreateService(uuid, nickName, comment);

  res.status(201).json({ message: "create success", wishData });
};

module.exports = { wishCreateController };
