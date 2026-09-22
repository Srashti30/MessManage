const express = require("express");
const { createRating } = require("../controllers/ratingController");

const router = express.Router();

router.post("/", createRating);

module.exports = router;