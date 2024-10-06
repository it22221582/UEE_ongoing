//Handles restaurant actions

// restaurantController.js

const Restaurant = require('../models/Restaurant');

// Get all restaurants
exports.getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).json(restaurants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single restaurant by ID
exports.getRestaurantById = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) return res.status(404).json({ message: 'Restaurant not found' });
    res.status(200).json(restaurant);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new restaurant
exports.createRestaurant = async (req, res) => {
  const { name, location, contactInfo, totalFoodContributed, contributionLevel, badges } = req.body;

  const newRestaurant = new Restaurant({
    name,
    location,
    contactInfo,
    totalFoodContributed,
    contributionLevel,
    badges
  });

  try {
    const savedRestaurant = await newRestaurant.save();
    res.status(201).json(savedRestaurant);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a restaurant
exports.updateRestaurant = async (req, res) => {
  try {
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedRestaurant) return res.status(404).json({ message: 'Restaurant not found' });
    res.status(200).json(updatedRestaurant);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a restaurant
exports.deleteRestaurant = async (req, res) => {
  try {
    const deletedRestaurant = await Restaurant.findByIdAndDelete(req.params.id);
    if (!deletedRestaurant) return res.status(404).json({ message: 'Restaurant not found' });
    res.status(200).json({ message: 'Restaurant deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
