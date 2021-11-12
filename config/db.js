const mongoose = require("mongoose");
const config = require('config')
const db = config.get('mongoURI')
const connectDB = () => {
  try {
    mongoose.connect(db , {
      useNewUrlParser:true,
    });
    console.log("mongo connect....");
  } catch (error) {
      console.log(err);
  }
};
module.exports = connectDB