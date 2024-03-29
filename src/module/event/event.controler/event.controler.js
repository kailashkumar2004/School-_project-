const { createEvent, allEvent, getEventById, updateEventById,
    deleteEventById, searchEventsName, searchWitheventName,
    searchdata, searchdataWithquery, upcomingEvents,
    pastEvents} = require("../event.busness/event.busness");




exports.createEvent = async (req) => await createEvent(req.body);
exports.allEvent = async (req) => await allEvent(req.query);
exports.getEventById = async (req) => await getEventById(req.params.id);
exports.updateEventById = async (req) => await updateEventById(req.body, req.params.id);
exports.deleteEventById = async (req) => await deleteEventById(req.params.id);
exports.searchEventsName = async (req) => await searchEventsName(req.body);
exports.searchWitheventName = async (req) => await searchWitheventName(req.body);
exports.searchdata = async (req) => await searchdata(req.body);
exports.searchdataWithquery = async (req) => await searchdataWithquery(req.query);
exports.upcomingEvents = async (req) => await upcomingEvents();
exports.pastEvents= async (req) => await pastEvents();