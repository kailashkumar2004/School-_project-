const { addTeacher, register, login, getTeacherByToken, updateTeacherByToken,
    deleteTeacherByToken, getByTeacher, getTeacherById, updateTeacherById,
    deleteTeacherById, getTeacherByname, searchTecherByuserName,
    searchdata,searchTecherWithquery, searchdataWithquery} = require("../teacher.busness/teacher.busness");


exports.addTeacher = async (req) => await addTeacher(req.body);
exports.register = async (req) => await register(req.body);
exports.login = async (req) => await login(req.body);
exports.getTeacherByToken = async (req) => await getTeacherByToken(req.user);
exports.updateTeacherByToken = async (req) => await updateTeacherByToken(req.body, req.user);
exports.deleteTeacherByToken = async (req) => await deleteTeacherByToken(req.user);
exports.getByTeacher = async (req) => await getByTeacher();
exports.getTeacherById = async (req) => await getTeacherById(req.params.id);
exports.updateTeacherById = async (req) => await updateTeacherById(req.body, req.params.id);
exports.deleteTeacherById = async (req) => await deleteTeacherById(req.params.id);
exports.getTeacherByname = async (req) => await getTeacherByname(req.body);
exports.searchTecherByuserName = async (req) => await searchTecherByuserName(req.body);
exports.searchdata = async (req) => await searchdata(req.body);
exports.searchTecherWithquery = async (req) => await searchTecherWithquery(req.user, req.query);
exports.searchdataWithquery = async (req) => await searchdataWithquery(req.query);