const { createTeacher, register, login, getTeacherByToken, updateTeacherByToken,
    deleteTeacherByToken, allTeacher, getTeacherById, updateTeacherById,
    deleteTeacherById, getTeacherByname, searchTecherByuserName,
    searchdata, searchTokenWithquery, searchWithquery,
    resetPassword,updatePassword} = require("../teacher.busness/teacher.busness");


exports.createTeacher = async (req) => await createTeacher(req.body);
exports.register = async (req) => await register(req.body);
exports.login = async (req) => await login(req.body);
exports.getTeacherByToken = async (req) => await getTeacherByToken(req.user);
exports.updateTeacherByToken = async (req) => await updateTeacherByToken(req.user,req.body);
exports.deleteTeacherByToken = async (req) => await deleteTeacherByToken(req.user);
exports.allTeacher = async (req) => await allTeacher(req.query);
exports.getTeacherById = async (req) => await getTeacherById(req.params.id);
exports.updateTeacherById = async (req) => await updateTeacherById(req.body, req.params.id);
exports.deleteTeacherById = async (req) => await deleteTeacherById(req.params.id);
exports.getTeacherByname = async (req) => await getTeacherByname(req.body);
exports.searchTecherByuserName = async (req) => await searchTecherByuserName(req.body);
exports.searchdata = async (req) => await searchdata(req.body);
exports.searchTokenWithquery = async (req) => await searchTokenWithquery(req.user, req.query);
exports.searchWithquery = async (req) => await searchWithquery(req.query);
exports.resetPassword = async (req) => await resetPassword(req.user, req.body);
exports.updatePassword = async (req) => await updatePassword(req.body, req.params.id);