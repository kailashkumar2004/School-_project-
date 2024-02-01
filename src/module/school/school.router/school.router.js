const express = require("express");
const router = express.Router();
const { wrapAsync } = require("../../../helpres/router.helpres");


const { addSchool, getSchool, getSchoolById, updateSchoolById, deleteSchoolById,
    searchdataWithquery} = require("../school.controler/school.controler");


router.post("/addSchool", wrapAsync(addSchool));
router.get("/getSchool", wrapAsync(getSchool));
router.get("/getSchoolById/:id", wrapAsync(getSchoolById));
router.put("/updateSchoolById/:id", wrapAsync(updateSchoolById));
router.delete("/deleteSchoolById/:id", wrapAsync(deleteSchoolById));
router.get("/searchdataWithquery", wrapAsync(searchdataWithquery));



module.exports = router;