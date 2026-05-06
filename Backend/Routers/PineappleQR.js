const express = require('express');
const router = express.Router();
const qrController = require('../Controllers/PineappleQR.js');

// Generate QR + Save
router.post('/generate', qrController.createQRCode);

// Get all
router.get('/', qrController.getAllQRCodes);

// Get by ID
router.get('/:id', qrController.getQRCodeById);

module.exports = router;