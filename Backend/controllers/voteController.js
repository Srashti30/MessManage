const SuggestionVote = require("../models/SuggestionVote");

const voteSuggestion = async (req, res) => {
  try {
    const { studentId, suggestionId } = req.body;

    const vote = await SuggestionVote.create({
      studentId,
      suggestionId,
    });

    res.status(201).json({
      message: "Vote added",
      vote,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        message: "You have already voted for this suggestion",
      });
    }

    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  voteSuggestion,
};