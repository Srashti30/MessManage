const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
      unique: true,
    },

    breakfast: {
      type: [String],
      default: [],
    },

    lunch: {
      type: [String],
      default: [],
    },

    dinner: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Meal", mealSchema);