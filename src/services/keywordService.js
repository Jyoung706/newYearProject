const request = require("request");
require("dotenv").config();
const wishDao = require("../models/wishDao");
const keyWordDao = require("../models/keyWordDao");
const { getCurrentTime, getPreviousTime } = require("../common/date");

const keywordAnalyze = async () => {
  let pre_time = getPreviousTime();
  let curr_time = getCurrentTime();

  const count = await wishDao.findWishListByTimeCount(pre_time, curr_time);
  let wishDiv = Math.ceil(count / 50);

  let limit = 50;

  for (let i = 1, pending = Promise.resolve(); i <= wishDiv; i++) {
    let text = "";

    let wishList = await wishDao.findWishListByTime(
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

  let map = new Map();

  request.post(options, function (error, response, body) {
    let bodyJsonParse = JSON.parse(body);
    let morp = bodyJsonParse.return_object.sentence[0].morp;

    morp.forEach((e) => {
      if (e.type === "NNG" || e.type === "NNP" || e.type === "NNB") {
        if (map.get(e.lemma)) {
          let num = map.get(e.lemma);
          map.set(e.lemma, num + 1);
        } else {
          map.set(e.lemma, 1);
        }
      }
    });

    map.forEach(async (v, k) => {
      await keyWordDao.upsertKeyWord(k, v);
    });
  });
};

module.exports = { keywordAnalyze };
