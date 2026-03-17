const mongoose = require('mongoose');

const healthTrackingSchema = new mongoose.Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Patient'
    },
    trackingType: {
        type: String,
        enum: ['weight', 'blood-pressure', 'blood-sugar', 'heart-rate', 'sleep', 'steps'],
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        default: ''
    },
    recordedAt: {
        type: Date,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('HealthTracking', healthTrackingSchema);