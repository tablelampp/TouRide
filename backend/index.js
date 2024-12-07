import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome to TouRide');
});



mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("App connected to Database");
        app.listen(PORT, () => {
            console.log(`App listening to port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });