//Routes for restaurant-specific actions

// restaurantRoutes.js

const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

// Get all restaurants
router.get('/', restaurantController.getAllRestaurants);

// Get a restaurant by ID
router.get('/:id', restaurantController.getRestaurantById);

// Create a new restaurant
router.post('/', restaurantController.createRestaurant);

// Update a restaurant by ID
router.put('/:id', restaurantController.updateRestaurant);

// Delete a restaurant by ID
router.delete('/:id', restaurantController.deleteRestaurant);

module.exports = router;
