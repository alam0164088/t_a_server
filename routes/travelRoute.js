// Controller import
const { GetTravel, UploadTravel, UpdateTravel, DeleteTravel, getTravelData  } = require("../controllers/travelRouteController");

// Travel router define
const travelRouter = require("express").Router();

// Get all Travels
travelRouter.get('/allTravels', GetTravel);

// Upload Travel
travelRouter.post('/uploadTravel', UploadTravel);

// get a Travel
travelRouter.get('/Travel/:id', getTravelData);

// Update a Travel
travelRouter.patch('/Travel/:id', UpdateTravel);

// Delete a Travel
travelRouter.delete('/Travel/:id', DeleteTravel);

// Nodule export
module.exports = travelRouter;