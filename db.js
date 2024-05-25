const mongoose = require("mongoose");
require('dotenv').config();
//const mongoURI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

const connectToMongo = async() => {
    try {
          mongoose.connect(process.env.mongoURI, {useNewUrlParser: true}, ()=> {
            console.log("Connected to Mongo Successfully!");
        })
    }
    catch (e) {
        console.error(e);
    }
}

module.exports = connectToMongo;