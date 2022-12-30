const mongoose = require("mongoose");
const Street = require("../models/street");

const streetDetail = require("./streetDetail");

require("dotenv").config();

const mongoDB = process.env.MONGO_URI;

mongoose
    .connect(mongoDB, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => console.log("CONNECTED TO MONGODB"))
    .catch((err) => console.log(err));

const clearAll = async function () {
    console.log("clearAll BEGIN");
    await Street.deleteMany();
    console.log("clearAll END");
};
