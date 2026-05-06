const QRCode = require('qrcode');
const QRModel = require('../models/PineappleQR.js');
const { v4: uuidv4 } = require('uuid');

// CREATE + GENERATE QR
exports.createQRCode = async (req, res) => {
    try {
        const {
            batchId,
            warehouseId,
            fruitWeight,
            sizeGrade,
            marketPrice,
            aromaScore,
            sweetnessBrix
        } = req.body;

        // Unique ID for QR
        const uniqueId = uuidv4();

        const qrData = {
            id: uniqueId,
            batchId,
            warehouseId,
            fruitWeight,
            sizeGrade,
            marketPrice,
            aromaScore,
            sweetnessBrix,
            timestamp: new Date()
        };

        // Generate QR as base64
        const qrImage = await QRCode.toDataURL(JSON.stringify(qrData));

        // Save to DB
        const newQR = new QRModel({
            ...qrData,
            qrCodeImage: qrImage
        });

        await newQR.save();

        res.status(201).json({
            message: "QR Code Generated Successfully",
            data: newQR
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET ALL
exports.getAllQRCodes = async (req, res) => {
    try {
        const data = await QRModel.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET BY ID
exports.getQRCodeById = async (req, res) => {
    try {
        const data = await QRModel.findById(req.params.id);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

