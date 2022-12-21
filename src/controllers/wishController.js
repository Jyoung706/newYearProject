const wishService = require("../services/wishServices");

const wishCreateController = (req, res) => {
  const { nickName, comment } = req.body;

  wishService.wishCreateService(nickName, comment);

  res.status(201).json({ message: "create success" });
};

module.exports = { wishCreateController };
