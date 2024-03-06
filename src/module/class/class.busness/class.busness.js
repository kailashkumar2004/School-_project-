const mongoose = require("mongoose");
const express = require("express");
const { Class } = require("../class.model/class.model");

const createClass = async (body) => {
    const newClass = new Class(body);
    console.log("newClass--------------------->>", newClass);
    if (!newClass) {
        throw "newClass data not find"
    };
    const response = await newClass.save();
    return {
        msg: "create class sucess",
        result: response
    };
};
const allClass = async (query) => {
    try {
        const { page = 1 } = query;
        const limit = 10;
        const skip=(page-1)*limit
        const response = await Class.find().skip(skip).limit(limit).sort({createdAt:-1});
        console.log("response-------------->>", response);
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
const getClassById = async (id) => {
    try {
        const getdata = await Class.findById(id);
        console.log("getdata------------->>", getdata);
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
const updateClassById = async (body, id) => {
    try {
        const updatedata = await Class.findByIdAndUpdate(id, { $set: body }, { new: true });
        console.log("updatedata------------->>", updatedata);
        if (!updatedata) throw "invalited data find";

        return {
            msg: "updatedata sucessfully",
            result: updatedata
        };
    } catch (error) {
        console.log("error-------------->>", error);
        throw "error message"
    };
};
const deleteClassById = async (id) => {
    try {
        const deletedata = await Class.findByIdAndDelete(id);
        console.log("deletedata----------------->>", deletedata);
        if (!deletedata) throw "invalited data find";

        return {
            msg: "deletedata sucessfully",
            result: deletedata
        };
    } catch (error) {
        console.log("error--------------->>", error);
        throw "error message"
    };
};
const searchClass = async (body) => {
    try {
        const searchdata = await Class.findOne({ class: body.class });
        console.log("searchdata----------->>", searchdata);
        if (!searchdata) throw "invalited data find";
        
        return {
            msg: "okk sucessfully datta",
            result: searchdata
        };
          
    } catch (error) {
        console.log("error--------------->>", error);
        throw "error message"
    };
};
const searchWithClass = async (body) => {
    try {
        const searchdata = await Class.find({ class: body.class });
        console.log("searchdata------------->>", searchdata);
        if (!searchdata) throw "invalited data find";

        return {
            msg: "okk sucessfully data",
            count: searchdata.length,
            result: searchdata
        };
    } catch (error) {
        console.log("error-------------->>", error);
        throw "error message"
    };
};
const searchdata = async (body) => {
    try {
        const searchdata = await Class.find(body);
        console.log("searchdata----------->>", searchdata);
        if (!searchdata) throw "invaliteddata find";

        return {
            msg: "okk sucessfuly data",
            count: searchdata.length,
            result: searchdata
        };
    } catch (error) {
        console.log("error--------------->>", error);
        throw "error message"
    };
};
const searchdataWithQuery = async (query) => {
    try {
        const searchdata = await Class.find(query);
        console.log("searchdata-------------->>", searchdata);
        if (!searchdata) throw "invalited data find";

        return {
            msg: "okk sucessfully data",
            count: searchdata.length,
            result: searchdata
        };
    } catch (error) {
        console.log("error---------------->>", error);
        throw "errormessage"
    };
};
module.exports = {
    createClass, allClass, getClassById, updateClassById, deleteClassById,
    searchClass,searchWithClass,searchdata,searchdataWithQuery}