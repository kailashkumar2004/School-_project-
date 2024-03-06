const express = require("express");
const router = express.Router();
const { wrapAsync } = require("../../../helpres/router.helpres");


const { createSchool, allSchool, getSchoolById, updateSchoolById, deleteSchoolById,
    searchWithquery} = require("../school.controler/school.controler");


router.post("/createSchool", wrapAsync(createSchool));
router.get("/allSchool", wrapAsync(allSchool));
router.get("/getSchoolById/:id", wrapAsync(getSchoolById));
router.put("/updateSchoolById/:id", wrapAsync(updateSchoolById));
router.delete("/deleteSchoolById/:id", wrapAsync(deleteSchoolById));
router.get("/searchWithquery", wrapAsync(searchWithquery));



module.exports = router;