const express = require("express");
const {
  getTodayMeal,
  createMeal,
} = require("../controllers/mealController");

const router = express.Router();

router.get("/today", getTodayMeal);
router.post("/", createMeal);

module.exports = router;