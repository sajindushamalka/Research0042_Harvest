const mongoose = require('mongoose');

const qrCodeSchema = new mongoose.Schema({
    batchId: {
        type: String,
        required: true
    },
    warehouseId: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    fruitWeight: {
        type: Number,
        required: true
    },
    sizeGrade: {
        type: String,
        required: true
    },
    marketPrice: {
        type: Number,
        required: true
    },
    aromaScore: {
        type: Number,
        required: true
    },
    sweetnessBrix: {
        type: Number,
        required: true
    },
    qrCodeImage: {
        type: String // base64 QR image
    }
}, { timestamps: true });

module.exports = mongoose.model('QRCode', qrCodeSchema);