const mongoose = require("mongoose");
const express = require("express");
const { Notes } = require("../notes.model/notes.model");

const createNotes = async (body) => {
    const newNotes = new Notes(body);
    console.log("newNotes---------------------->>", newNotes);
    if (!newNotes) {
        throw "newNotes data not find"
    };
    const response = await newNotes.save();
    return {
        msg: "createNotes sucess",
        result: response
    };
};
const allNotes = async (query) => {
    try {
        const { page = 1 } = query;
        const limit = 10;
        const skip=(page-1)*limit
        const response = await Notes.find().populate("class").skip(skip).limit(limit).sort({createdAt:-1});
        console.log("response---------------->>", response);
        if (!response) throw "invalited data find";

        return {
            msg: "okk sucess data",
            count: response.length,
            result: response
        };
    } catch (error) {
        console.log("error---------------------->>", error);
        throw "error message"
    };
};
const getNotesById = async (id) => {
    const getNotes = await Notes.findById(id).populate("class");
    console.log("getNotes----------------->>", getNotes);
    if (!getNotes) {
        throw "getNotes data is not find"
    };
    return {
        msg: "okk sucessfully",
        result: getNotes
    };
};
const updateNotesById = async (body, id) => {
    try {
        const updatedata = await Notes.findByIdAndUpdate(id, { $set: body }, { new: true }).populate("class");
        console.log("updatedata--------------->>", updatedata);
        if (!updatedata) throw "invalited data find";

        return {
            msg: "updatedata sucessfully",
            result: updatedata
        };
    } catch (error) {
        console.log("eror-------------->>", error);
        throw "error message"
    };
};
const deleteNotesById = async (id) => {
    try {
        const deletedata = await Notes.findByIdAndDelete(id).populate("class");
        console.log("deletedata------------------>>", deletedata);
        if (!deletedata) throw "invalited data find";

        return {
            msg: "deletedata sucessfully",
            result: deletedata
        };
    } catch (error) {
        console.log("error------------------->>", error);
        throw "error message"
    };
};
const searchNotes = async (body) => {
    try {
        const searchNotes = await Notes.find(body).populate("class");
        console.log("searchNotes------------------->>", searchNotes);
        if (!searchNotes) {
            throw "searchNotes data not find"
        };
        return {
            msg: "searchNotes sucess",
            count: searchNotes.length,
            result: searchNotes
        };
    } catch (error) {
        console.log("error----------------------->>", error);
        throw "New Error message"
    };
};
const searchWithnotesName = async (body) => {
    try {
        const searchdata = await Notes.find({ notesName: body.notesName }).populate("class");
        console.log("searchdata-------------->>", searchdata);
        if (!searchdata) throw "invalited data find";

        return {
            msg: "okk sucess data",
            count: searchdata.length,
            result: searchdata
        };
    } catch (error) {
        console.log("error----------------->>", error);
        throw "error message"
    };
};

const searchNotesWithquery = async (query) => {
    try {
        const searchdata = await Notes.find(query).populate("class");
        console.log("searchdata------------------>>", searchdata);
        if (!searchdata) throw "invalited data find";

        return {
            msg: "okk sucess data",
            count: searchdata.length,
            result: searchdata
        };
    } catch (error) {
        console.log("error-------------------->>", error);
        throw "error message"
    };
};
module.exports = {
    createNotes, allNotes, getNotesById, updateNotesById,
    deleteNotesById, searchNotes, searchWithnotesName,searchNotesWithquery};