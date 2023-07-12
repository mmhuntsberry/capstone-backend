const express = require("express");
const router = express.Router();
const signinController = require("../controllers/signin");

router.post("/signin", signinController.signin);

module.exports = router;
