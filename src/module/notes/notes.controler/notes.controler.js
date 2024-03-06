const { createNotes, allNotes, getNotesById, updateNotesById
    , deleteNotesById, searchNotes, searchWithnotesName,
    searchNotesWithquery} = require("../notes.busness/notes.busness");


exports.createNotes = async (req) => await createNotes(req.body);
exports.allNotes = async (req) => await allNotes(req.query);
exports.getNotesById = async (req) => await getNotesById(req.params.id);
exports.updateNotesById = async (req) => await updateNotesById(req.body, req.params.id);
exports.deleteNotesById = async (req) => await deleteNotesById(req.params.id);
exports.searchNotes = async (req) => await searchNotes(req.body);
exports.searchWithnotesName = async (req) => await searchWithnotesName(req.body);
exports.searchNotesWithquery = async (req) => await searchNotesWithquery(req.query);