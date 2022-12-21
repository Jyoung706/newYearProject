const express = require("express");
const keywordController = require("../controller/keywordController");
require("dotenv").config();

const router = express.Router();

router.post("/keyword", keywordController.keywordAnalyze);

module.exports = router;
