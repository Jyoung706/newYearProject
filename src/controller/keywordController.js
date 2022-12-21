var request = require("request");
require("dotenv").config();

const keywordAnalyze = (req, res) => {
  let text = "복권 당첨시켜주세요";
  // DB에서 데이터 읽어와서 text에 값 넘겨주어야 함. 1만글자까지 가능

  var requestJson = {
    argument: {
      text: text,
      analysis_code: process.env.ANALYSISCODE,
    },
  };

  var options = {
    url: process.env.API_URI,
    body: JSON.stringify(requestJson),
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.API_KEY,
    },
  };

  request.post(options, function (error, response, body) {
    let bodyJsonParse = JSON.parse(body);
    let morp = bodyJsonParse.return_object.sentence[0].morp;
    let nounArr = [];

    morp.forEach((e) => {
      if (e.type === "NNG") {
        console.log(e.lemma);
      }
    });
  });
};

module.exports = { keywordAnalyze };
