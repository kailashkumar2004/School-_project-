const { createSchool, allSchool, getSchoolById, updateSchoolById, deleteSchoolById,
    searchWithquery} = require("../school.busness/school.busness");

exports.createSchool = async (req) => await createSchool(req.body);
exports.allSchool = async (req) => await allSchool(req.query);
exports.getSchoolById = async (req) => await getSchoolById(req.params.id);
exports.updateSchoolById = async (req) => await updateSchoolById(req.body, req.params.id);
exports.deleteSchoolById = async (req) => await deleteSchoolById(req.params.id);
exports.searchWithquery = async (req) => await searchWithquery(req.query);