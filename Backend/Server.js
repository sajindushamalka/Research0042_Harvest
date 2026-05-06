const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

const qrRoutes = require('./Routers/PineappleQR.js');
const gpsRoutes = require('./Routers/GPSData.js');
const sensorRoutes = require('./Routers/SensorData.js');
const analyticsRoutes = require('./Routers/Analytics.js');

require('./mqttClient.js'); // 🔥 Start MQTT listener

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/qr', qrRoutes);
app.use('/api/gps', gpsRoutes);
app.use('/api/sensor', sensorRoutes);
app.use('/api/analytics', analyticsRoutes);

app.get('/', (req, res) => {
    res.send('API Running...');
});

const PORT = process.env.PORT || 5006;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('✅ MongoDB Connected Successfully');
})
.catch((err) => {
    console.error('❌ MongoDB Connection Failed:', err.message);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});