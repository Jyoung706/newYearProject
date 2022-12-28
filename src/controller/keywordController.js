const request = require("request");
const keywordService = require("../service/keywordService");
require("dotenv").config();

const keywordAnalyze = async (req, res) => {
  await keywordService.keywordAnalyze();
};

module.exports = { keywordAnalyze };
