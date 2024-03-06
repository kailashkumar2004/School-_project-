const express = require("express");
const router = express.Router();
const { wrapAsync } = require("../../../helpres/router.helpres");


const { createNotes, allNotes, getNotesById, updateNotesById,
    deleteNotesById, searchNotes, searchWithnotesName
    ,searchNotesWithquery } = require("../notes.controler/notes.controler");



router.post("/createNotes", wrapAsync(createNotes));
router.get("/allNotes", wrapAsync(allNotes));
router.get("/getNotesById/:id", wrapAsync(getNotesById));
router.put("/updateNotesById/:id", wrapAsync(updateNotesById));
router.delete("/deleteNotesById/:id", wrapAsync(deleteNotesById));
router.post("/searchNotes", wrapAsync(searchNotes));
router.post("/searchWithnotesName", wrapAsync(searchWithnotesName));
router.get("/searchNotesWithquery", wrapAsync(searchNotesWithquery));




module.exports = router;