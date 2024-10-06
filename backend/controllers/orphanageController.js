const Orphanage = require('../models/Orphanage');

// Create orphanage
exports.createOrphanage = async (req, res) => {
  try {
    const orphanage = new Orphanage(req.body);
    await orphanage.save();
    res.status(201).json(orphanage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all orphanages
exports.getAllOrphanages = async (req, res) => {
  try {
    const orphanages = await Orphanage.find();
    res.status(200).json(orphanages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get orphanage by ID
exports.getOrphanageById = async (req, res) => {
  try {
    const orphanage = await Orphanage.findById(req.params.id);
    if (!orphanage) return res.status(404).json({ message: "Orphanage not found" });
    res.status(200).json(orphanage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
