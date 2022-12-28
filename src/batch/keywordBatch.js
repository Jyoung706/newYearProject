const cron = require("node-cron");

// 초 분 시 날짜 월 요일
const batchKeywordAnalyze = () => {
  cron.schedule("0-59 * * * * *", function () {
    console.log("node-cron 실행됨 test");
  });
};

module.exports = { batchKeywordAnalyze };
