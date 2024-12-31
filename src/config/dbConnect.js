const mongoose = require("mongoose");

const ConnectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONSTRURL);
    console.log(`Connection established with ${connect.connection.host} , ${connect.connection.name}`);
  } catch (err) {
    console.log("Connection Error", err.message);
    process.exit(1);
  }
};

module.exports = ConnectDB;
