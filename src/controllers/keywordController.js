const keywordService = require('../services/keywordService');

const findUsuallyKeyword = async (req, res) => {
  const keywords = await keywordService.findUsuallyKeyword();
  res.status(200).json(keywords);
};

const keywordAnalyze = async (req, res) => {
  const { type } = req.query;
  await keywordService.keywordAnalyze(type);

  res.status(200).json({ messag: '키워드 분석을 완료하였습니다.' });
};

module.exports = { findUsuallyKeyword, keywordAnalyze };
