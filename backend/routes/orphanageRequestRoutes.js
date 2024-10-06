//Routes for orphanage requests

const express = require('express');
const { createOrphanageRequest, getAllOrphanageRequests } = require('../controllers/orphanageRequestController');
const router = express.Router();

router.post('/', createOrphanageRequest);
router.get('/', getAllOrphanageRequests);

module.exports = router;
