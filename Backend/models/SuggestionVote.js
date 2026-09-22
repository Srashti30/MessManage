const mongoose = require("mongoose");

const suggestionVoteSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    suggestionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Suggestion",
      required: true,
    },
  },
  { timestamps: true }
);

suggestionVoteSchema.index(
  { studentId: 1, suggestionId: 1 },
  { unique: true }
);

module.exports = mongoose.model(
  "SuggestionVote",
  suggestionVoteSchema
);