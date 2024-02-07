const express = require("express");
const router = express.Router();

const { wrapAsync } = require("../../../helpres/router.helpres");
const { teacherauthincate} = require("../../../midleware/teachermidleare");

const { addTeacher, register, login, getTeacherByToken, updateTeacherByToken,
    deleteTeacherByToken, getByTeacher, getTeacherById, updateTeacherById,
    deleteTeacherById, getTeacherByname, searchTecherByuserName,
    searchdata,searchTecherWithquery,searchdataWithquery} = require("../teacher.controler/teacher.controler");


router.post("/addTeacher", wrapAsync(addTeacher));
router.post("/register", wrapAsync(register));
router.post("/login", wrapAsync(login));
router.get("/getTeacherByToken", teacherauthincate, wrapAsync(getTeacherByToken));
router.put("/updateTeacherByToken", teacherauthincate, wrapAsync(updateTeacherByToken));
router.delete("/deleteTeacherByToken", teacherauthincate, wrapAsync(deleteTeacherByToken));
router.get("/getByTeacher", wrapAsync(getByTeacher));
router.get("/getTeacherById/:id", wrapAsync(getTeacherById));
router.put("/updateTeacherById/:id", wrapAsync(updateTeacherById));
router.delete("/deleteTeacherById/:id", wrapAsync(deleteTeacherById));
router.post("/getTeacherByname", wrapAsync(getTeacherByname));
router.post("/searchTecherByuserName", wrapAsync(searchTecherByuserName));
router.post("/searchdata", wrapAsync(searchdata));
router.get("/searchTecherWithquery", wrapAsync(searchTecherWithquery));
router.get("/searchdataWithquery", wrapAsync(searchdataWithquery));

module.exports = router;