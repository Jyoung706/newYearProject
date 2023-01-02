const express = require("express");
const asyncWrap = require("../middleware/asyncWrap");
const wishController = require("../controllers/wishController");
const idController = require("../controllers/idController");
const likeController = require("../controllers/likeController");
const keywordController = require("../controllers/keywordController");

const router = express.Router();

router.get("/keyword", asyncWrap(keywordController.findUsuallyKeyword));
router.get("/id", idController.idCreateController);
router.post("/wishes", asyncWrap(wishController.wishCreateController));
router.post("/like", asyncWrap(likeController.likeController));
router.get("/main", wishController.wishForMainController);
router.get("/like", likeController.myLikeController);
router.get("/wishes", asyncWrap(wishController.detailWishForMainController));
router.get("/search", asyncWrap(wishController.findWishByKeyword));
router.get("/mywish", asyncWrap(wishController.findMyWishList));

module.exports = router;
