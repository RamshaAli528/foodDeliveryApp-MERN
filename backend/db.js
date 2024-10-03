
// const mongoose = require('mongoose');

// // Make sure to specify the database name in the URI
// const mongoURI = "mongodb+srv://ramshaali528:ramshaali528@cluster0.u4xy6.mongodb.net/food-delivery?retryWrites=true&w=majority&appName=Cluster0";

// const mongoDB = async () => {
//   try {
//     // Use async/await for better error handling
//     await mongoose.connect(mongoURI, {
//       // useNewUrlParser: true,
//       // useUnifiedTopology: true,
//     });
//     console.log("MongoDB connected successfully");
//     const fetch_data= await mongoose.connection.db.collection("food_items");
//     fetch_data.find({}).toArray(function(err, data){
//       if(err) console.log(err);
//       else console.log(data)
//     })
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//     process.exit(1); // Exit the process if connection fails
//   }
// };

// module.exports = mongoDB;
const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://ramshaali528:ramshaali528@cluster0.u4xy6.mongodb.net/food-delivery?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected successfully");

    const db = mongoose.connection.db; 
    const collection = db.collection('food_items');

    // Fetch data and log it
    const data = await collection.find({}).toArray(); 
    if (data.length > 0) {
      console.log("Fetched Data:", data); 
    } else {
      console.log("No data found in the 'food_items' collection.");
    }
  } catch (error) {
    console.error("Error connecting to MongoDB or fetching data:", error);
    process.exit(1);
  }
};

module.exports = mongoDB;
