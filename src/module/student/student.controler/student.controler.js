const { createStudent, register, login, getStudentByToken,
    updateStudentByToken, deleteStudentByToken, allStuden,
    getStudentById, updateStudentById, deleteStudentById, searchWithname,
    searchWithuserName, searchdata, searchdataTokenWithuery,
    searchdataWithquery, searchWithFilters, resetPassword, updatePassword
} = require("../student.busness/student.busness");

exports.createStudent = async (req) => await createStudent(req.body);
exports.register = async (req) => await register(req.body);
exports.login = async (req) => await login(req.body);
exports.getStudentByToken = async (req) => await getStudentByToken(req.user);
exports.updateStudentByToken = async (req) => await updateStudentByToken(req.body, req.user);
exports.deleteStudentByToken = async (req) => await deleteStudentByToken(req.user);
exports.allStuden = async (req) => await allStuden(req.query);
exports.getStudentById = async (req) => await getStudentById(req.params.id);
exports.updateStudentById = async (req) => await updateStudentById(req.body, req.params.id)
exports.deleteStudentById = async (req) => await deleteStudentById(req.params.id);
exports.searchWithname = async (req) => await searchWithname(req.body);
exports.searchWithuserName = async (req) => await searchWithuserName(req.body);
exports.searchdata = async (req) => await searchdata(req.body);
exports.searchdataTokenWithuery = async (req) => await searchdataTokenWithuery(req.user, req.query);
exports.searchdataWithquery = async (req) => await searchdataWithquery(req.query);
exports.searchWithFilters = async (req) => await searchWithFilters(req.body);
exports.resetPassword = async (req) => await resetPassword(req.user, req.body)
exports.updatePassword = async (req) => await updatePassword(req.user, req.body, req.params.id);