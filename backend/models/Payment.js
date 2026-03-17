const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Patient' },
    appointmentId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Appointment' },
    doctorId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Doctor' },
    amount: { type: Number, required: true },
    paymentMethod: { type: String, enum: ['credit-card', 'debit-card', 'upi', 'wallet', 'bank-transfer'], required: true },
    transactionId: { type: String, required: true },
    status: { type: String, enum: ['pending', 'completed', 'failed', 'refunded'], required: true },
    paymentGateway: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

paymentSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;