const request = require("request");
require("dotenv").config();
const wishModel = require("../model/wishModel");
const { getCurrentTime, getPreviousTime } = require("../common/date");

const keywordAnalyze = async () => {
  //   let pre_time = getPreviousTime();
  //   let curr_time = getCurrentTime();
  let pre_time = "2022-12-26T18:00:00.000Z";
  let curr_time = "2022-12-26T19:00:00.000Z";

  const count = await wishModel.findWishListByTimeCount(pre_time, curr_time);
  let wishDiv = Math.ceil(count / 50);

  let limit = 50;

  for (let i = 1, pending = Promise.resolve(); i <= wishDiv; i++) {
    let text = "";

    let wishList = await wishModel.findWishListByTime(
      pre_time,
      curr_time,
      i * limit - limit,
      limit
    );

    for (let x = 0; x < wishList.length; x++) {
      text = text + wishList[x].comment;
    }

    pending = pending.then(() => {
      return new Promise((resolve) => {
        setTimeout(function () {
          resolve(callMorphemeAPI(text));
        }, 1000);
      });
    });
  }
};

const callMorphemeAPI = (text) => {
  let requestJson = {
    argument: {
      text: text,
      analysis_code: process.env.ANALYSISCODE,
    },
  };

  let options = {
    url: process.env.API_URI,
    body: JSON.stringify(requestJson),
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.API_KEY,
    },
  };

  request.post(options, function (error, response, body) {
    let mropStr = "";

    let bodyJsonParse = JSON.parse(body);
    let morp = bodyJsonParse.return_object.sentence[0].morp;
    morp.forEach((e) => {
      if (e.type === "NNG" || e.type === "NNP" || e.type === "NNB") {
        mropStr = mropStr + e.lemma;
      }
    });
  });
};

module.exports = { keywordAnalyze };
