const Suggestion = require("../models/Suggestion.js");

const createSuggestion = async (req, res) => {
  try {
    const { studentId, text } = req.body;

    if (!studentId || !text) {
      return res.status(400).json({
        message: "Student ID and suggestion text are required",
      });
    }

    const suggestion = await Suggestion.create({
      studentId,
      text,
    });

    res.status(201).json(suggestion);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSuggestions = async (req, res) => {
  try {
    const suggestions = await Suggestion.find()
      .populate("studentId", "name rollNumber")
      .sort({ createdAt: -1 });

    res.json(suggestions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createSuggestion,
  getSuggestions,
};