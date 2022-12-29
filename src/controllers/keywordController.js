const keywordService = require("../services/keywordService");

const findUsuallyKeyword = async (req, res) => {
  const keywords = await keywordService.findUsuallyKeyword();
  res.status(200).json(keywords);
};

module.exports = { findUsuallyKeyword };
