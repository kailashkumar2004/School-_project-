const express = require("express");
const router = express.Router();
const { wrapAsync } = require("../../../helpres/router.helpres");

const { createClass, allClass, getClassById, updateClassById, deleteClassById,
    searchClass,searchWithClass,searchdata,searchdataWithQuery} = require("../class.controler/class.controler");


router.post("/createClass", wrapAsync(createClass));
router.get("/allClass", wrapAsync(allClass));
router.get("/getClassById/:id", wrapAsync(getClassById));
router.put("/updateClassById/:id", wrapAsync(updateClassById));
router.delete("/deleteClassById/:id", wrapAsync(deleteClassById));
router.post("/searchClass", wrapAsync(searchClass));
router.post("/searchWithClass", wrapAsync(searchWithClass));
router.post("/searchdata", wrapAsync(searchdata));
router.get("/searchdataWithQuery", wrapAsync(searchdataWithQuery));



module.exports = router;