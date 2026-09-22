const Meal = require("../models/Meal");

const getTodayMeal = async (req, res) => {
  try {
    const start = new Date();
    start.setHours(0, 0, 0, 0);

    const end = new Date();
    end.setHours(23, 59, 59, 999);

    const meal = await Meal.findOne({
      date: {
        $gte: start,
        $lte: end,
      },
    });

    if (!meal) {
      return res.status(404).json({
        message: "Today's menu not found",
      });
    }

    res.json(meal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createMeal = async (req, res) => {
  try {
    const { date, breakfast, lunch, dinner } = req.body;

    const meal = await Meal.create({
      date,
      breakfast,
      lunch,
      dinner,
    });

    res.status(201).json(meal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getTodayMeal,
  createMeal,
};