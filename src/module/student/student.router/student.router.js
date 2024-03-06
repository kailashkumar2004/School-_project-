const express = require("express");
const router = express.Router();
const { authenticate } = require("../../../midleware/authmidleware");
const { wrapAsync } = require("../../../helpres/router.helpres");

const { createStudent, register, login, getStudentByToken,
    updateStudentByToken, deleteStudentByToken, allStuden,
    getStudentById, updateStudentById, deleteStudentById,
    searchWithname, searchWithuserName, searchdata, searchdataTokenWithuery,
    searchdataWithquery, searchWithFilters, resetPassword,
    updatePassword} = require("../student.controler/student.controler");


router.post("/createStudent", wrapAsync(createStudent))
router.post("/register", wrapAsync(register));
router.post("/login", wrapAsync(login));
router.get("/getStudentByToken", authenticate, wrapAsync(getStudentByToken));
router.put("/updateStudentByToken", authenticate, wrapAsync(updateStudentByToken));
router.delete("/deleteStudentByToken", authenticate, wrapAsync(deleteStudentByToken));
router.get("/allStuden", wrapAsync(allStuden));
router.get("/getStudentById/:id", wrapAsync(getStudentById));
router.put("/updateStudentById/:id", wrapAsync(updateStudentById));
router.delete("/deleteStudentById/:id", wrapAsync(deleteStudentById));
router.post("/searchWithname", wrapAsync(searchWithname));
router.post("/searchWithuserName", wrapAsync(searchWithuserName));
router.post("/searchdata", wrapAsync(searchdata));
router.get("/searchdataTokenWithuery", authenticate, wrapAsync(searchdataTokenWithuery));
router.get("/searchdataWithquery", wrapAsync(searchdataWithquery));
router.post("/searchWithFilters", wrapAsync(searchWithFilters));
router.put("/resetPassword", authenticate, wrapAsync(resetPassword));
router.put("/updatePassword/:id", authenticate, wrapAsync(updatePassword));

module.exports = router;