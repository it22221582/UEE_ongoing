// volunteerActivityController.js

const VolunteerActivity = require('../models/VolunteerActivity');

// Get all volunteer activities
exports.getAllVolunteerActivities = async (req, res) => {
  try {
    const activities = await VolunteerActivity.find().populate('volunteer');
    res.status(200).json(activities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single volunteer activity by ID
exports.getVolunteerActivityById = async (req, res) => {
  try {
    const activity = await VolunteerActivity.findById(req.params.id).populate('volunteer');
    if (!activity) return res.status(404).json({ message: 'Volunteer activity not found' });
    res.status(200).json(activity);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new volunteer activity
exports.createVolunteerActivity = async (req, res) => {
  const { volunteer, activityType, date, location, description, hoursWorked } = req.body;

  const newActivity = new VolunteerActivity({
    volunteer,
    activityType,
    date,
    location,
    description,
    hoursWorked,
  });

  try {
    const savedActivity = await newActivity.save();
    res.status(201).json(savedActivity);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a volunteer activity
exports.updateVolunteerActivity = async (req, res) => {
  try {
    const updatedActivity = await VolunteerActivity.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).populate('volunteer');
    if (!updatedActivity) return res.status(404).json({ message: 'Volunteer activity not found' });
    res.status(200).json(updatedActivity);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a volunteer activity
exports.deleteVolunteerActivity = async (req, res) => {
  try {
    const deletedActivity = await VolunteerActivity.findByIdAndDelete(req.params.id);
    if (!deletedActivity) return res.status(404).json({ message: 'Volunteer activity not found' });
    res.status(200).json({ message: 'Volunteer activity deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
