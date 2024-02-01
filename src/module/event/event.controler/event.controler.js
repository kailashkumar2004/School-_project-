const { addEvent, getEvent, getEventById, updateEventById,
    deleteEventById, searchWithname, searchWitheventName,
    searchdata, searchdataWithquery, upcomingEvents,
    pastEvents} = require("../event.busness/event.busness");




exports.addEvent = async (req) => await addEvent(req.body);
exports.getEvent = async (req) => await getEvent();
exports.getEventById = async (req) => await getEventById(req.params.id);
exports.updateEventById = async (req) => await updateEventById(req.body, req.params.id);
exports.deleteEventById = async (req) => await deleteEventById(req.params.id);
exports.searchWithname = async (req) => await searchWithname(req.body);
exports.searchWitheventName = async (req) => await searchWitheventName(req.body);
exports.searchdata = async (req) => await searchdata(req.body);
exports.searchdataWithquery = async (req) => await searchdataWithquery(req.query);
exports.upcomingEvents = async (req) => await upcomingEvents();
exports.pastEvents= async (req) => await pastEvents();