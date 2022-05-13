const express = require("express");
const { default: mongoose } = require("mongoose");
const mogoose = require("mongoose");
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT } = require("./config/congig");

const app = express();
const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`

const connectWithRetry = () =>{
    mongoose
    .connect(mongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => console.log("Successfully connected to db!"))
    .catch((e) => {
        console.log(e);
        setTimeout(connectWithRetry, 5000)
    });
}

connectWithRetry();

app.get("/", (req, res) => {
    res.send("<h2>Hi There..!</h2>");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listning on port ${port}`));