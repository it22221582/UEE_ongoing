const express = require('express');
const { createOrphanage, getAllOrphanages, getOrphanageById } = require('../controllers/orphanageController');
const router = express.Router();

router.post('/', createOrphanage);
router.get('/', getAllOrphanages);
router.get('/:id', getOrphanageById);

module.exports = router;
