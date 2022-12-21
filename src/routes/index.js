const express = require("express");
const asyncWrap = require("../middleware/asyncWrap");
const wishController = require("../controllers/wishController");

const router = express.Router();

router.post("/wishes", asyncWrap(wishController.wishCreateController));

module.exports = router;
