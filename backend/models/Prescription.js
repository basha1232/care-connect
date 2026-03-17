const mongoose = require('mongoose');

const prescriptionSchema = new mongoose.Schema({
    appointmentId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Appointment' },
    doctorId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    patientId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    medicines: [
        {
            name: { type: String, required: true },
            dosage: { type: String, required: true },
            frequency: { type: String, required: true },
            duration: { type: String, required: true },
            instructions: { type: String, required: true }
        }
    ],
    diagnosis: { type: String, required: true },
    advice: { type: String, required: true },
    followUpDate: { type: Date },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Prescription', prescriptionSchema);