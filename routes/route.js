// Controller import
const { HomeRes } = require("../controllers/routerController");

// Router define
const router = require("express").Router();

// Travel route import
const travelRouter = require('./travelRoute');

// Server home page response
router.get('/', HomeRes);

// Travel router
router.use(travelRouter);

// Module export
module.exports = router;