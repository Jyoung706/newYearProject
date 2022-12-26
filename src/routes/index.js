const express = require("express");
const asyncWrap = require("../middleware/asyncWrap");
const wishController = require("../controllers/wishController");
const idController = require("../controllers/idController");

const router = express.Router();

router.get("/id", idController.idCreateController);
router.post("/wishes", asyncWrap(wishController.wishCreateController));

module.exports = router;
