// Handles orphanage requests

const OrphanageRequest = require('../models/OrphanageRequest');

// Create orphanage request
exports.createOrphanageRequest = async (req, res) => {
  try {
    const request = new OrphanageRequest(req.body);
    await request.save();
    res.status(201).json(request);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all orphanage requests
exports.getAllOrphanageRequests = async (req, res) => {
  try {
    const requests = await OrphanageRequest.find().populate('orphanage');
    res.status(200).json(requests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
