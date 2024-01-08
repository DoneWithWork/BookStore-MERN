import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import { PORT, mongoDBURL } from "./config.js";
import booksRoute from "./routes/booksRoute.js";

const app = express();

// Enable CORS for all routes
app.use(cors());

// Parse JSON in request body
app.use(express.json());

// Your other routes
app.get('/', (req, res) => {
    return res.status(200).send('Hello, World!');
});

// Books routes
app.use('/books', booksRoute);

mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('App connected to Db');
        app.listen(PORT, () => {
            console.log(`App is listening on port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
