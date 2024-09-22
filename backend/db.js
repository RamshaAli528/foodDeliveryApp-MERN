// const mongoose = require('mongoose');
// const mongoURI ="mongodb+srv://ramshaali528:ramshaali528@cluster0.u4xy6.mongodb.net/yourDatabaseName?retryWrites=true&w=majority&appName=Cluster0"
// const mongoDB=()=>{
//     mongoose.connect(mongoURI,()=>{
//         console.log("connected")
//     });
// }
// module.exports = mongoDB;


const mongoose = require('mongoose');

// Make sure to specify the database name in the URI
const mongoURI = "mongodb+srv://ramshaali528:ramshaali528@cluster0.u4xy6.mongodb.net/yourDatabaseName?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
  try {
    // Use async/await for better error handling
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process if connection fails
  }
};

module.exports = mongoDB;
