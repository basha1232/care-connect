const mongoose = require('mongoose');

const medicalRecordSchema = new mongoose.Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Patient'
    },
    recordType: {
        type: String,
        enum: ['prescription', 'lab-report', 'diagnosis', 'vaccination', 'allergy'],
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    fileUrl: {
        type: String,
        required: true
    },
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    recordDate: {
        type: Date,
        default: Date.now,
        required: true
    },
    isShared: {
        type: Boolean,
        default: false
    },
    sharedWith: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Update the updatedAt field before saving
medicalRecordSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema);
module.exports = MedicalRecord;