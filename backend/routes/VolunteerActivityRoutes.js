// volunteerActivityRoutes.js

const express = require('express');
const router = express.Router();
const volunteerActivityController = require('../controllers/volunteerActivityController');

// Get all volunteer activities
router.get('/', volunteerActivityController.getAllVolunteerActivities);

// Get a volunteer activity by ID
router.get('/:id', volunteerActivityController.getVolunteerActivityById);

// Create a new volunteer activity
router.post('/', volunteerActivityController.createVolunteerActivity);

// Update a volunteer activity by ID
router.put('/:id', volunteerActivityController.updateVolunteerActivity);

// Delete a volunteer activity by ID
router.delete('/:id', volunteerActivityController.deleteVolunteerActivity);

module.exports = router;
