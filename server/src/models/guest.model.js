import mongoose from 'mongoose';
import { STATUS } from '#enums';

const guestSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    rsvp: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        enum: Object.values(STATUS),
        default: 'pending'
    },
    wedding: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Wedding',
        required: true
    }
})

export const Guest = mongoose.model('Guest', guestSchema);