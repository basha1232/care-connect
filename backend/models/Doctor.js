const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    specialization: { type: String, required: true },
    licenseNumber: { type: String, required: true },
    qualifications: { type: [String], required: true },
    yearsOfExperience: { type: Number, required: true },
    hospitalAffiliation: { type: String, required: true },
    consultationFee: { type: Number, required: true },
    bio: { type: String, required: true },
    rating: { type: Number, default: 0 },
    reviewCount: { type: Number, default: 0 },
    availability: { type: Boolean, default: true },
    isApproved: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

// Middleware to update the updatedAt field on every save
doctorSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;