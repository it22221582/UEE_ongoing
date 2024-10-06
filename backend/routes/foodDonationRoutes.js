//Routes for food donations

const express = require('express');
const { createFoodDonation, getAllFoodDonations, getFoodDonationById } = require('../controllers/foodDonationController');
const router = express.Router();

router.post('/', createFoodDonation);
router.get('/', getAllFoodDonations);
router.get('/:id', getFoodDonationById);

module.exports = router;
