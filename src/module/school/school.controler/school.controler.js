const { addSchool, getSchool, getSchoolById, updateSchoolById, deleteSchoolById,
    searchdataWithquery} = require("../school.busness/school.busness");

exports.addSchool = async (req) => await addSchool(req.body);
exports.getSchool = async (req) => await getSchool();
exports.getSchoolById = async (req) => await getSchoolById(req.params.id);
exports.updateSchoolById = async (req) => await updateSchoolById(req.body, req.params.id);
exports.deleteSchoolById = async (req) => await deleteSchoolById(req.params.id);
exports.searchdataWithquery = async (req) => await searchdataWithquery(req.query);