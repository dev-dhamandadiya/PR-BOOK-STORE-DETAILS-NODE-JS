import mongoose from 'mongoose';

const connectionString = process.env.MONGO_URI || env.MONGO_URL;

mongoose.connect(connectionString)
    .then(() => {
        console.log(' DB Connected');
    })
    .catch((err) => {
        console.log('DB Connection Error:', err);
    });

const db = mongoose.connection;

db.on('error', (err) => {
    console.log('MongoDB Error:', err);
});

export default db;