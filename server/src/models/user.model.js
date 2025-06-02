import mongoose from 'mongoose';
import { hashPassword } from '#services/auth.service.js';

const userSchema = mongoose.Schema({
    email: {
        type: String,
        match: /^[a-zA-Z0-9._]+@[a-zA-Z0-9]+.[a-zA-Z]+$/,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
});

userSchema.pre('save', async function (next) {
    this.password = await hashPassword(this.password);
    next();
})

export const User = mongoose.model('User', userSchema);