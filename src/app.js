const express = require("express");
const router = require("./routes");
const cors = require("cors");
const morgan = require("morgan");
const cron = require("./batch/keywordBatch");

cron.batchKeywordAnalyze();

const createApp = () => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors());
  app.use(router);
  app.use(morgan("dev"));

  return app;
};

module.exports = { createApp };
