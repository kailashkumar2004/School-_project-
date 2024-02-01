const mongoose = require("mongoose");
const express = require("express");
const { Notes } = require("../notes.model/notes.model");

const addNotes = async (body) => {
    try {
        const data = new Notes(body);
        console.log("data------------------->>", data);
        if (!data) throw "invalited data find";
        const saveNotes = await data.save();
        console.log("saveNotes------------------>>", saveNotes);
        if (!saveNotes) throw "data is not find";

        return {
            msg: "okk added data sucess",
            result: saveNotes
        };
    } catch (error) {
        console.log("error--------------------->>", error);
        throw "error message"
    };
};
const getNotes = async () => {
    try {
        const response = await Notes.find().populate("class");
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
    try {
        const getdata = await Notes.findById(id).populate("class");
        console.log("getdata------------------>>", getdata);
        if (!getdata) throw "invalited data find";

        return {
            msg: "okk sucessfully data",
            result: getdata
        };
    } catch (error) {
        console.log("error---------------------->>", error);
        throw "error message"
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
        const deletedata = await Notes.findByIdAndDelete(id);
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
const searchWithnotes = async (body) => {
    try {
        const searchdata = await Notes.findOne({ notesName: body.notesName }).populate("class");
        console.log("searchdata---------------->>", searchdata);
        if (!searchdata) throw "invalited data find";

        return {
            msg: "okk sucessfully data",
            result: searchdata
        };
    } catch (error) {
        console.log("error-------------------->>", error);
        throw "error message"
    };
};
const searchdataWithnotesName = async (body) => {
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
const searchdata = async (body) => {
    try {
        const searchdata = await Notes.find(body).populate("class");
        console.log("searchdata------------------>>", searchdata);
        if (!searchdata) throw "invalited data find";

        return {
            msg: "okk sucessfully data",
            count: searchdata.length,
            result: searchdata
        };
    } catch (error) {
        console.log("error------------------->>", error);
        throw "error message"
    };
};
const searchdataWithquery = async (query) => {
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
    addNotes, getNotes, getNotesById, updateNotesById,
    deleteNotesById, searchWithnotes, searchdataWithnotesName,
    searchdata,searchdataWithquery};