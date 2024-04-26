// Dependences
const { MongoClient, ServerApiVersion } = require('mongodb');

// .env import
require("dotenv").config();

// uri define
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xytnh4r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
     serverApi: {
       version: ServerApiVersion.v1,
       strict: true,
       deprecationErrors: true,
     }
});

// connect to db
async function run() {
     try{
          // Connect the client to the server	(optional starting in v4.7)
          await client.connect();

     }catch(err){
          // Error handle
          console.log(err.message);
     }
}

// Function run
run();

// Create db and collection
const travelCollection = client.db("travel-agency").collection("travel-place-info");

// Module export
module.exports = travelCollection;