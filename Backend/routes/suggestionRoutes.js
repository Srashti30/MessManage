const express = require("express");

const {
  createSuggestion,
  getSuggestions,
} = require("../controllers/suggestionController");

const { voteSuggestion } = require("../controllers/voteController");

const router = express.Router();

router.post("/", createSuggestion);
router.get("/", getSuggestions);
router.post("/vote", voteSuggestion);

module.exports = router;