const express = require("express");
const router = express.Router();
const { wrapAsync } = require("../../../helpres/router.helpres");


const { createEvent, allEvent, getEventById, updateEventById,
    deleteEventById, searchEventsName, searchWitheventName,
    searchdata, searchdataWithquery, upcomingEvents,
    pastEvents} = require("../event.controler/event.controler");

router.post("/createEvent", wrapAsync(createEvent));
router.get("/allEvent", wrapAsync(allEvent));
router.get("/getEventById/:id", wrapAsync(getEventById));
router.put("/updateEventById/:id", wrapAsync(updateEventById));
router.delete("/deleteEventById/:id", wrapAsync(deleteEventById));
router.post("/searchEventsName", wrapAsync(searchEventsName));
router.post("/searchWitheventName", wrapAsync(searchWitheventName));
router.post("/searchdata", wrapAsync(searchdata));
router.get("/searchdataWithquery", wrapAsync(searchdataWithquery));
router.get("/upcomingEvents", wrapAsync(upcomingEvents));
router.get("/pastEvents", wrapAsync(pastEvents));


module.exports = router;