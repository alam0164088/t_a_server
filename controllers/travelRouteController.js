// Dependences
const travelCollection = require('../config/db');
const { ObjectId } = require('mongodb');

// Get all Travel
exports.GetTravel = async (req, res) =>{
     // find from db
     const Travels = travelCollection.find();
     // convert to array
     const result = await Travels.toArray();
     // response send
     res.send(result);
}


// Upload Travel
exports.UploadTravel = async (req, res) => {
     // get data 
     const data = req.body;
     // insert data on db
     const result = await travelCollection.insertOne(data);
     // response send
     res.send(result);
}

// get a Travel
exports.getTravelData = async (req, res) => {
     // get the id
     const id = req.params.id;
     // create a filter
     const filter = { _id: new ObjectId(id) };
     // find from db
     const result = await travelCollection.findOne(filter);
     //response send
     res.send(result);
}


// Update a Travel
exports.UpdateTravel = async (req, res) => {
     // get the id
     const id = req.params.id;
     // get update data 
     const updateData = req.body;
     // create a filter
     const filter = { _id: new ObjectId(id) };
     // upsert 
     const options = { upsert: true };
     // set update data
     const updateDoc = {
          $set: {...updateData},
          };
     // update on db
     const result = await travelCollection.updateOne(filter, updateDoc, options);
     // response send
     res.send(result);
}


// Delete a Travel
exports.DeleteTravel = async (req, res) => {
     // get the id
     const id = req.params.id;
     // create a filter
     const filter = { _id: new ObjectId(id) };
     // delete from db
     const result = await travelCollection.deleteOne(filter);
     //response send
     res.send(result);
}