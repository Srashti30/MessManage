const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    mealId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Meal",
      required: true,
    },

    mealType: {
      type: String,
      enum: ["breakfast", "lunch", "dinner"],
      required: true,
    },

    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
  },
  { timestamps: true }
);

ratingSchema.index(
  { studentId: 1, mealId: 1, mealType: 1 },
  { unique: true }
);

module.exports = mongoose.model("Rating", ratingSchema);