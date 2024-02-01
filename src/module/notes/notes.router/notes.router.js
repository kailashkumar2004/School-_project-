const express = require("express");
const router = express.Router();
const { wrapAsync } = require("../../../helpres/router.helpres");


const { addNotes, getNotes, getNotesById, updateNotesById,
    deleteNotesById, searchWithnotes, searchdataWithnotesName,
    searchdata,searchdataWithquery} = require("../notes.controler/notes.controler");



router.post("/addNotes", wrapAsync(addNotes));
router.get("/getNotes", wrapAsync(getNotes));
router.get("/getNotesById/:id", wrapAsync(getNotesById));
router.put("/updateNotesById/:id", wrapAsync(updateNotesById));
router.delete("/deleteNotesById/:id", wrapAsync(deleteNotesById));
router.post("/searchWithnotes", wrapAsync(searchWithnotes));
router.post("/searchdataWithnotesName", wrapAsync(searchdataWithnotesName));
router.post("/searchdata", wrapAsync(searchdata));
router.get("/searchdataWithquery", wrapAsync(searchdataWithquery));




module.exports = router;