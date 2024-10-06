// Handles food donation actions

const FoodDonation = require('../models/FoodDonation');

// Create a new food donation
exports.createFoodDonation = async (req, res) => {
  try {
    const foodDonation = new FoodDonation(req.body);
    await foodDonation.save();
    res.status(201).json(foodDonation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all food donations
exports.getAllFoodDonations = async (req, res) => {
  try {
    const foodDonations = await FoodDonation.find().populate('restaurant');
    res.status(200).json(foodDonations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get food donation by ID
exports.getFoodDonationById = async (req, res) => {
  try {
    const foodDonation = await FoodDonation.findById(req.params.id).populate('restaurant');
    if (!foodDonation) return res.status(404).json({ message: "Food donation not found" });
    res.status(200).json(foodDonation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
