const { addNotes, getNotes, getNotesById, updateNotesById
    , deleteNotesById, searchWithnotes, searchdataWithnotesName,
    searchdata,searchdataWithquery} = require("../notes.busness/notes.busness");


exports.addNotes = async (req) => await addNotes(req.body);
exports.getNotes = async (req) => await getNotes();
exports.getNotesById = async (req) => await getNotesById(req.params.id);
exports.updateNotesById = async (req) => await updateNotesById(req.body, req.params.id);
exports.deleteNotesById = async (req) => await deleteNotesById(req.params.id);
exports.searchWithnotes = async (req) => await searchWithnotes(req.body);
exports.searchdataWithnotesName = async (req) => await searchdataWithnotesName(req.body);
exports.searchdata = async (req) => await searchdata(req.body);
exports.searchdataWithquery = async (req) => await searchdataWithquery(req.query);