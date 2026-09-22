const Rating = require("../models/Rating");

const createRating = async (req, res) => {
  try {
    const { studentId, mealId, mealType, rating } = req.body;

    const newRating = await Rating.create({
      studentId,
      mealId,
      mealType,
      rating,
    });

    res.status(201).json(newRating);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        message: "You have already rated this meal",
      });
    }

    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createRating,
};