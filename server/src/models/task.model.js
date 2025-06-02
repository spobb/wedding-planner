import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    wedding: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Wedding',
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    isDone: {
        type: Boolean,
        default: false,
    },
})

export const Task = mongoose.model('Task', taskSchema);