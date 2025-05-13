import mongoose from 'mongoose';

const weddingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    guests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Guest"
    }],
    vendors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vendor"
    }],
    budgets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Budget"
    }]
})

export const Wedding = mongoose.model('Wedding', weddingSchema);