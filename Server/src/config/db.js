const mongoose = require("mongoose");
const uri = process.env.MONGO_URL;

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(uri);
    console.log(`MongoDb connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error : ${error.message}`);
    process.exit();
  }
};

module.exports = connectDb;
