const express = require("express");
const router = express.Router();

const { wrapAsync } = require("../../../helpres/router.helpres");
const { teacherauthincate} = require("../../../midleware/teachermidleare");

const { createTeacher, register, login, getTeacherByToken, updateTeacherByToken,
    deleteTeacherByToken, allTeacher, getTeacherById, updateTeacherById,
    deleteTeacherById, getTeacherByname, searchTecherByuserName,
    searchdata, searchTokenWithquery, searchWithquery,
    resetPassword,updatePassword} = require("../teacher.controler/teacher.controler");


router.post("/createTeacher", wrapAsync(createTeacher));
router.post("/register", wrapAsync(register));
router.post("/login", wrapAsync(login));
router.get("/getTeacherByToken", teacherauthincate, wrapAsync(getTeacherByToken));
router.put("/updateTeacherByToken", teacherauthincate, wrapAsync(updateTeacherByToken));
router.delete("/deleteTeacherByToken", teacherauthincate, wrapAsync(deleteTeacherByToken));
router.get("/allTeacher", wrapAsync(allTeacher));
router.get("/getTeacherById/:id", wrapAsync(getTeacherById));
router.put("/updateTeacherById/:id", wrapAsync(updateTeacherById));
router.delete("/deleteTeacherById/:id", wrapAsync(deleteTeacherById));
router.post("/getTeacherByname", wrapAsync(getTeacherByname));
router.post("/searchTecherByuserName", wrapAsync(searchTecherByuserName));
router.post("/searchdata", wrapAsync(searchdata));
router.get("/searchTokenWithquery", teacherauthincate,wrapAsync(searchTokenWithquery));
router.get("/searchWithquery", wrapAsync(searchWithquery));
router.put("/resetPassword", teacherauthincate, wrapAsync(resetPassword));
router.put("/updatePassword/:id", wrapAsync(updatePassword));

module.exports = router;