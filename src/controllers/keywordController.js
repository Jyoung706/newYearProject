const request = require("request");
const keywordService = require("../services/keywordService");
require("dotenv").config();

const keywordAnalyze = async (req, res) => {
  await keywordService.keywordAnalyze();
};

module.exports = { keywordAnalyze };
