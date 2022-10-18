
const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const postTradersRouter = require("./routes/postTraders.routes");
const authRouter = require("./routes/auth.routes");

const app = express();
const PORT = process.env.PORT || config.get('serverPort');
const corsMiddleware = require('./middleware/cors.middleware');

app.use(corsMiddleware);
app.use(express.json());
app.use("/api/postTrader", postTradersRouter);
app.use("/api/auth", authRouter);

const start = async () => {
    try {
        await mongoose.connect(config.get('dbUrl'));

        app.listen(PORT, () => {
            console.log('Server started on port', PORT);
        });
    } catch (e) {

    }
}

start();