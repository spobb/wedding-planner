import mongoose from "mongoose";

const budgetSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        default: 'EUR'
    },
    vendor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vendor'
    },
    wedding: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Wedding',
        required: true
    }
})

export const Budget = mongoose.model('Budget', budgetSchema);