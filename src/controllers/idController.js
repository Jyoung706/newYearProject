const uuidService = require("../services/idService");

const idCreateController = (req, res) => {
  const id = uuidService.idCreateService();

  res.status(200).json({ uuid: id });
};

module.exports = { idCreateController };
