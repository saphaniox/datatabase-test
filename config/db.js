const mongoose = require("mongoose");
//const LOCAL_URI = "mongodb://localhost:27017/user-data";
// const CLOUD_URI = "mongodb+srv://W8PypVqIRJXDReMh:W8PypVqIRJXDReMh@cluster0.1nq2x.mongodb.net/user-data?retryWrites=true&w=majority&appName=Cluster0";
const CLOUD_URI = "mongodb+srv://muganzas80:b1fGJ5K0k2xNX0WZ@cluster0.9qj1u4x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(CLOUD_URI)
  .then(() => {
    console.log("Database Connected successfully");
  })
  .catch((err) => {
    console.log("Failed to connect to database " + err);
  });

module.exports = mongoose;