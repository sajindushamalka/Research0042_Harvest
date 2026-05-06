const mongoose = require('mongoose');

const sensorSchema = new mongoose.Schema({
    qrId: String,
    temperature: Number,
    humidity: Number,
    freshnessScore: Number,
    timestamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('SensorData', sensorSchema);