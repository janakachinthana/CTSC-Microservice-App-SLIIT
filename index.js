const express = require("express");
const { default: mongoose } = require("mongoose");
const mogoose = require("mongoose");

const app = express();

mongoose
.connect("mongodb://janaka:mypassword@mongo:27017/?authSource=admin")
.then(() => console.log("Successfully connected to db!"))
.catch((e) => console.log(e));

app.get("/", (req, res) => {
    res.send("<h2>Hi There..!</h2>");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listning on port ${port}`));