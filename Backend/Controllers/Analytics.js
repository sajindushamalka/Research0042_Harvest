const QR = require('../models/PineappleQR.js');
const GPS = require('../models/GPSData.js');
const Sensor = require('../models/SensorData.js');

exports.getFullTrackingData = async (req, res) => {
    try {
        const { qrId } = req.params;

        const qr = await QR.findOne({ qrId });
        const gps = await GPS.find({ qrId });
        const sensor = await Sensor.find({ qrId });

        res.json({
            crateDetails: qr,
            gpsRoute: gps,
            sensorData: sensor
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};