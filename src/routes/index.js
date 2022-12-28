const express = require("express");
const asyncWrap = require("../middleware/asyncWrap");
const wishController = require("../controllers/wishController");
const idController = require("../controllers/idController");
const likeController = require("../controllers/likeController");

const router = express.Router();

router.get("/id", idController.idCreateController);
router.post("/wishes", asyncWrap(wishController.wishCreateController));
router.post("/like", asyncWrap(likeController.likeController));

module.exports = router;
