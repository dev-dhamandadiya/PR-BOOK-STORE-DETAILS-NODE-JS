import mongoose from 'mongoose';
import { env } from './dotenv.js';

mongoose.connect(env.MONGO_URL)
    .then(() => {
        console.log('DB Connected');
    })
    .catch((err) => {
        console.log('DB Connection Error:', err);
    });

const db = mongoose.connection;

db.on('error', (err) => {
    console.log('MongoDB Error:', err);
});

export default db;
