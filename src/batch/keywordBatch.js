const cron = require("node-cron");
const keywordService = require("../services/keywordService");

const batchKeywordAnalyze = () => {
  cron.schedule("0 */1 * * *", async function () {
    await keywordService.keywordAnalyze();
  });
};

module.exports = { batchKeywordAnalyze };
