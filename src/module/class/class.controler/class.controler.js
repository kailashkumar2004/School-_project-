const { addClass, getClass, getClassById, updateClassById, deleteClassById,
    searchClass,searchWithClass,searchdata,searchdataWithQuery} = require("../class.busness/class.busness");


exports.addClass = async (req) => await addClass(req.body);
exports.getClass = async (req) => await getClass();
exports.getClassById = async (req) => await getClassById(req.params.id);
exports.updateClassById = async (req) => await updateClassById(req.body, req.params.id);
exports.deleteClassById = async (req) => await deleteClassById(req.params.id);
exports.searchClass = async (req) => await searchClass(req.body);
exports.searchWithClass = async (req) => await searchWithClass(req.body);
exports.searchdata = async (req) => await searchdata(req.body);
exports.searchdataWithQuery = async (req) => await searchdataWithQuery(req.query);