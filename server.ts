import app from './app/app';
import mongoose from 'mongoose';
import { exit } from 'process';
const dotenv = require('dotenv');
dotenv.config({ path: 'config.env' });

const port: Number = Number(process.env.PORT) || 3000;
const DB: string = process.env.DATABASE;

const server = app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('DB connection successful');
    })
    .catch(() => {
        console.log('Database Connection Failed');
        exit(0);
    });
