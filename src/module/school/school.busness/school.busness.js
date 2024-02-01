const mongoose = require("mongoose");
const express = require("express");
const { School } = require("../school.model/school.model");

const addSchool = async (body) => {
    try {
        const data = new School(body);
        console.log("data--------------->>", data);
        if (!data) throw "data is not find";
        const savedata = await data.save();
        console.log("savedata------------->>", savedata);
        if (!savedata) throw "email allready register";

        return {
            msg: "added data sucessfully",
            result: savedata
        };
    } catch (error) {
        console.log("error----------------->>", error);
        throw "error message"
    };
};
const getSchool = async () => {
    try {
        const response = await School.find();
        console.log("response========<<>>", response);
        if (!response) throw "invalited data find";

        return {
            msg: "okk sucessfully data",
            count: response.length,
            result: response
        };
    } catch (error) {
        console.log("error---------------->>", error);
        throw "error message"
    };
};
const getSchoolById = async (id) => {
    try {
        const getdata = await School.findById(id);
        console.log("getdata------------->>", getdata);
        if (!getdata) throw "invalited data find";

        return {
            msg: "getdata sucessfully",
            result: getdata
        };
    } catch (error) {
        console.log("error---------------->>", error);
        throw "error message"
    };
};
const updateSchoolById = async (body, id) => {
    try {
        const updatedata = await School.findByIdAndUpdate(id, { $set: body }, { new: true });
        console.log("updatedata-------------->>", updatedata);
        if (!updatedata) throw "invalited data find";

        return {
            msg: "updatedata sucessfully",
            result: updatedata
        };
    } catch (error) {
        console.log("error------------------>>", error);
        throw "error message"
    };
};
const deleteSchoolById = async (id) => {
    try {
        const deletedata = await School.findByIdAndDelete(id);
        console.log("deletedata------------>>", deletedata);
        if (!deletedata) throw "invalited data find";

        return {
            msg: "deletedata sucessfully",
            result: deletedata
        };
    } catch (error) {
        console.log("error------------->>", error);
        throw "error message"
    };
};
const searchdataWithquery = async (query) => {
    try {
        const searchdata = await School.find(query);
        console.log("searchdata----------->>", searchdata);
        if (!searchdata) throw "invalited data find";

        return {
            msg: "okk sucessfully data",
            count: searchdata.length,
            result: searchdata
        };
    } catch (error) {
        console.log("error--------------->>", error);
        throw "error message"
    };
};
module.exports = {
    addSchool, getSchool, getSchoolById, updateSchoolById, deleteSchoolById,
    searchdataWithquery
}