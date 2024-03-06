const mongoose = require("mongoose");
const express = require("express");
const { School } = require("../school.model/school.model");

const createSchool = async (body) => {
    const newSchool = new School(body);
    console.log("newSchool---------------------",newSchool);
    if (!newSchool) {
        throw "newSchool data not find"
    };
    const response = await newSchool.save();
    return {
        msg: "create school data sucess",
        result: response
    };
};
const allSchool = async (query) => {
    try {
        const { page = 1 } = query;
        const limit = 10;
        const skip=(page-1)*limit
        const response = await School.find().skip(skip).limit(limit).sort({createdAt:-1});
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
const searchWithquery = async (query) => {
    const searchdata = await School.find(query);
    console.log("searchdata------------------>>", searchdata);
    if (!searchdata) {
        throw "searchdata not found"
    };
    return {
        msg: "okk sucess",
        count: searchdata.length,
        result: searchdata
    };
};
module.exports = {
    createSchool, allSchool, getSchoolById, updateSchoolById, deleteSchoolById,
    searchWithquery
}