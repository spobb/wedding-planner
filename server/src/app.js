import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import mongoose from 'mongoose';

import weddingRouter from './routes/wedding.route.js';
import guestRouter from './routes/guest.route.js';
import vendorRouter from './routes/vendor.route.js';
import budgetRouter from './routes/budget.route.js';

const app = express();

app.use(cors());
app.use(express.json());

// Connect to DB
(async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Connected to DB')
    } catch (err) {
        console.error('Error connecting to DB:', err);
    }
})();

// Routes
app.use('/api/weddings', weddingRouter);
app.use('/api/guests', guestRouter);
app.use('/api/vendors', vendorRouter);
app.use('/api/budgets', budgetRouter);


const port = process.env.PORT || 3000;

process.on("uncaughtException", (err) => {
    console.error("Uncaught exception: ", err.message);
    process.exit(1);
})

app.listen(port, () => {
    console.log(`\nApp listening @ http://localhost:${port}\n`);
});