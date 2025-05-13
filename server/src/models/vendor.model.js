import mongoose from 'mongoose';

const vendorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    profession: {
        type: String,
        required: true
    },
    budgets: [{
        type: mongoose.Schema.Types.ObjectId,
        red: 'Budget'
    }],
    wedding: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Wedding',
        required: true
    }
})

export const Vendor = mongoose.model('Vendor', vendorSchema);